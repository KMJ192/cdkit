import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// 서버 설정
export const server = setupServer(...handlers);