import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const loggedInGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const token = authService.getToken()
    const router = inject(Router)

    if (token) {
        router.navigate(['/home'])
        return false
    }
    return true
};
