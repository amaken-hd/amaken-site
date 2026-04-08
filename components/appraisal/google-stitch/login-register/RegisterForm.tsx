"use client"

import React from 'react'
import { AuthInput, AuthButton } from './AuthUI'

export const RegisterForm = () => (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AuthInput
                id="firstName"
                label="First Name"
                placeholder="John"
                type="text"
                required
            />
            <AuthInput
                id="lastName"
                label="Last Name"
                placeholder="Doe"
                type="text"
                required
            />
        </div>

        <AuthInput
            id="email"
            label="Email Address"
            placeholder="name@company.com"
            type="email"
            icon="mail"
            required
        />

        <AuthInput
            id="company"
            label="Company Name"
            placeholder="Amaken Group"
            type="text"
            icon="corporate_fare"
            required
        />

        <AuthInput
            id="crNumber"
            label="Commercial Registration (CR)"
            placeholder="1010XXXXXX"
            type="text"
            icon="description"
            required
        />

        <AuthInput
            id="password"
            label="Password"
            placeholder="••••••••"
            type="password"
            icon="lock"
            required
        />

        <div className="pt-2">
            <AuthButton type="submit" icon="how_to_reg">
                Create Account
            </AuthButton>
        </div>
    </form>
)
