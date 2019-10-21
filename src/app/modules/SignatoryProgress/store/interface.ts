import { Action, Thunk } from 'easy-peasy';

/* interfaces */
import { ErrorResponse } from 'app/state/api/interfaces';

export interface SignatoryProgress {
  _id: string;
  publishingOpenDataIATIJune2017: string;
  publishingOpenDataIATIMay2018: string;
  publishingOpenDataIATIMay2019: string;

  publishingHumanitarianActivitiesJune2017: string;
  publishingHumanitarianActivitiesMay2018: string;
  publishingHumanitarianActivitiesMay2019: string;

  using202OrLaterJune2017: string;
  using202OrLaterMay2018: string;
  using202OrLaterMay2019: string;

  providingGranular202DataJune2017: string;
  providingGranular202DataMay2018: string;
  providingGranular202DataMay2019: string;
}

export interface SignatoryProgressModel {
  SignatoryProgress: SignatoryProgress;
  error: string | null;
  setError: Action<SignatoryProgressModel, ErrorResponse>;
  setSignatoryProgress: Action<SignatoryProgressModel, SignatoryProgress>;
  getSignatoryProgress: Thunk<SignatoryProgressModel>;
  editSignatoryProgress: Thunk<SignatoryProgressModel, SignatoryProgress>;
}
