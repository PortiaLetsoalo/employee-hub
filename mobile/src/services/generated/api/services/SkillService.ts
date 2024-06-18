/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SkillDto } from '../models/SkillDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SkillService {

  /**
   * @param requestBody 
   * @returns SkillDto Success
   * @throws ApiError
   */
  public static postApiServicesAppSkillCreate(
requestBody?: SkillDto,
): CancelablePromise<SkillDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/services/app/Skill/Create',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @param requestBody 
   * @returns SkillDto Success
   * @throws ApiError
   */
  public static postApiServicesAppSkillCreateSkillSet(
requestBody?: Array<SkillDto>,
): CancelablePromise<Array<SkillDto>> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/services/app/Skill/CreateSkillSet',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns SkillDto Success
   * @throws ApiError
   */
  public static getApiServicesAppSkillGetAll(): CancelablePromise<Array<SkillDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/services/app/Skill/GetAll',
    });
  }

  /**
   * @param personId 
   * @returns SkillDto Success
   * @throws ApiError
   */
  public static getApiServicesAppSkillGetAllByPersonId(
personId?: string,
): CancelablePromise<Array<SkillDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/services/app/Skill/GetAllByPersonId',
      query: {
        'personId': personId,
      },
    });
  }

  /**
   * @param requestBody 
   * @returns SkillDto Success
   * @throws ApiError
   */
  public static putApiServicesAppSkillUpdate(
requestBody?: SkillDto,
): CancelablePromise<SkillDto> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/api/services/app/Skill/Update',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @param requestBody 
   * @returns SkillDto Success
   * @throws ApiError
   */
  public static putApiServicesAppSkillUpdateSkillSet(
requestBody?: Array<SkillDto>,
): CancelablePromise<Array<SkillDto>> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/api/services/app/Skill/UpdateSkillSet',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @param id 
   * @returns SkillDto Success
   * @throws ApiError
   */
  public static getApiServicesAppSkillGet(
id?: string,
): CancelablePromise<SkillDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/services/app/Skill/Get',
      query: {
        'id': id,
      },
    });
  }

  /**
   * @param id 
   * @returns any Success
   * @throws ApiError
   */
  public static deleteApiServicesAppSkillDelete(
id?: string,
): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/api/services/app/Skill/Delete',
      query: {
        'id': id,
      },
    });
  }

}
