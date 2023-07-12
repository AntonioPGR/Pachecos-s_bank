import axios from 'axios';

export class API {
  private base_url = 'http://127.0.0.1:8000/';
  private default_headers: IRequestHeaders = {
    'Content-type': 'application/json',
  };

  public get<R>(url: string, header?: IRequestHeaders) {
    return axios.get<R>(this.base_url + url, {
      headers: {
        ...this.default_headers,
        ...header,
      },
    });
  }

  public post<R>(url: string, data: any, headers?: IRequestHeaders) {
    return axios.post<R>(this.base_url + url, data, {
      headers: {
        ...this.default_headers,
        ...headers,
      },
    });
  }
}
