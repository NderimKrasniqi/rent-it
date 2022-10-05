type ErrorMessage = {
  message: string;
};

export interface IErrorResponse {
  errors: ErrorMessage[] | undefined;
}
