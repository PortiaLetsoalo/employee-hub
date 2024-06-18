/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountryDto } from '../models/CountryDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CountriesService {

  /**
   * @returns CountryDto Success
   * @throws ApiError
   */
  public static getApiServicesAppCountriesGetAllCountries(): CancelablePromise<Array<CountryDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/services/app/Countries/GetAllCountries',
    });
  }

}
