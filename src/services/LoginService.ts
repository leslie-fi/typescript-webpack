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
    let data = await RESULT.json()
    
    try {
      if (data) {
        return data;
      } else {
        console.log(`undefined ${RESULT}`)
        return undefined;
      }
    } catch (err) {
      console.error(err.stack, data);
    }
  }
}
