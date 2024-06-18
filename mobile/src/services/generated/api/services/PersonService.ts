/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PersonCreateDto } from '../models/PersonCreateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PersonService {

  /**
   * @param requestBody 
   * @returns PersonCreateDto Success
   * @throws ApiError
   */
  public static postApiServicesAppPersonCreateAsyc(
requestBody?: PersonCreateDto,
): CancelablePromise<PersonCreateDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/services/app/Person/CreateAsyc',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns PersonCreateDto Success
   * @throws ApiError
   */
  public static getApiServicesAppPersonGetAll(): CancelablePromise<Array<PersonCreateDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/services/app/Person/GetAll',
    });
  }

  /**
   * @param id 
   * @returns PersonCreateDto Success
   * @throws ApiError
   */
  public static getApiServicesAppPersonGet(
id?: string,
): CancelablePromise<PersonCreateDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/services/app/Person/Get',
      query: {
        'id': id,
      },
    });
  }

  /**
   * @param requestBody 
   * @returns PersonCreateDto Success
   * @throws ApiError
   */
  public static putApiServicesAppPersonUpdate(
requestBody?: PersonCreateDto,
): CancelablePromise<PersonCreateDto> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/api/services/app/Person/Update',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @param id 
   * @returns any Success
   * @throws ApiError
   */
  public static deleteApiServicesAppPersonDelete(
id?: string,
): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/api/services/app/Person/Delete',
      query: {
        'id': id,
      },
    });
  }

}
