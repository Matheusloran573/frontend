import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth-guard.service'; // Importe a classe correta

describe('AuthGuard', () => { // Descreva o teste com o nome correto da classe
  let service: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuard); // Use a classe correta aqui
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});