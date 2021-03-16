import { SessionToken } from '../models/AuthenticationModels';

const BASE_URL = 'http://localhost:8080/';
const LOGIN_URL = `${BASE_URL}login`;

export class LoginService {
  public async login(username: string, password: string): Promise<SessionToken | undefined> {
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    };

    const RESULT = await fetch(LOGIN_URL, options);
    try {
      RESULT.json();
      if (RESULT.status == 201) {
        return RESULT.json();
      } else {
        return undefined;
      }
    } catch (err) {
      console.error(err.stack, RESULT.json());
    }
  }
}
