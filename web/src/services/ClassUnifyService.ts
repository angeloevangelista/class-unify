import { AxiosInstance } from 'axios';
import baseAPI from './api';

import variables from '../config/variables';
import { parseISO } from 'date-fns';

export interface IApiResponse<T> {
  data: T;
  message: string | null;
  success: boolean;
}

export interface IClass {
  _id?: string;
  type: string;
  date: Date;
  link: string;
}

export interface IStudent {
  _id: string;
  name: string;
  email: string;
  grade: string;
  classes: IClass[];
}

class ClassUnifyService {
  private api: AxiosInstance;
  private static classInstance: ClassUnifyService;

  private constructor() {
    this.api = baseAPI(variables.API_BASE);
  }

  public static getInstance() {
    if (!ClassUnifyService.classInstance) {
      this.classInstance = new ClassUnifyService();
    }

    return this.classInstance;
  }

  async updateClass(
    student_id: string,
    class_id: string,
    class_data: IClass,
  ): Promise<IApiResponse<IClass[]>> {
    const result = await this.api.put<IApiResponse<IClass[]>>(
      `students/${student_id}/schedule/${class_id}`,
      class_data,
    );

    result.data.data.forEach(
      (studentClass) =>
        (studentClass.date = parseISO(studentClass.date.toString())),
    );

    return result.data;
  }

  async getNextClassInformation(
    student_id: string,
  ): Promise<IApiResponse<IClass>> {
    const result = await this.api.get(`students/${student_id}/links`);

    return result.data;
  }

  async cancelClass(student_id: string, class_id: string): Promise<void> {
    return await this.api.delete(`students/${student_id}/schedule/${class_id}`);
  }

  async saveClasses(
    student_id: string,
    studentClasses: IClass[],
  ): Promise<IApiResponse<IClass[]>> {
    const result = await this.api.post<IApiResponse<IClass[]>>(
      `students/${student_id}/schedule`,
      {
        classes: studentClasses,
      },
    );

    result.data.data.forEach(
      (studentClass) =>
        (studentClass.date = parseISO(studentClass.date.toString())),
    );

    return result.data;
  }

  async getStudents(): Promise<IApiResponse<IStudent[]>> {
    const result = await this.api.get<IApiResponse<IStudent[]>>(`students`);

    return result.data;
  }

  async getGrades(): Promise<IApiResponse<{ [key: string]: string }>> {
    const result = await this.api.get<IApiResponse<{ [key: string]: string }>>(
      `grades`,
    );

    return result.data;
  }

  async getClassTypes(): Promise<IApiResponse<{ [key: string]: string }>> {
    const result = await this.api.get<IApiResponse<{ [key: string]: string }>>(
      `classes`,
    );

    return result.data;
  }

  async getSchedule(student_id: string): Promise<IApiResponse<IClass[]>> {
    const result = await this.api.get<IApiResponse<IClass[]>>(
      `students/${student_id}/schedule`,
    );

    result.data.data.forEach(
      (studentClass) =>
        (studentClass.date = parseISO(studentClass.date.toString())),
    );

    return result.data;
  }
}

export default ClassUnifyService;
