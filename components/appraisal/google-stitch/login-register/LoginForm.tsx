"use client"

import React from 'react'
import { AuthInput, AuthButton, AuthCheckbox } from './AuthUI'

export const LoginForm = () => (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <AuthInput
            id="email"
            label="Email Address"
            placeholder="name@company.com"
            type="email"
            icon="mail"
            required
        />

        <div className="space-y-2">
            <div className="flex justify-between items-center">
                <label className="block text-xs font-bold text-[#041534] uppercase tracking-wider" htmlFor="password">
                    Password
                </label>
                <a className="text-[11px] font-bold text-[#006a66] hover:underline" href="#">
                    Forgot Password?
                </a>
            </div>
            <AuthInput
                id="password"
                label="" // Label handled above for layout
                placeholder="••••••••"
                type="password"
                icon="lock"
                required
            />
        </div>

        <AuthCheckbox id="remember" label="Keep me logged in for 30 days" />

        <div className="space-y-4 pt-2">
            <AuthButton type="submit" icon="arrow_forward">
                Sign In to Dashboard
            </AuthButton>

            <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#e1e2e4]"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-4 text-[#75777f] font-bold tracking-widest">Or</span>
                </div>
            </div>

            <AuthButton variant="secondary" icon="phone_iphone">
                Login with OTP (Mobile)
            </AuthButton>
        </div>
    </form>
)
