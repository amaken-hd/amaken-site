"use client"

import React, { useState } from 'react'
import { AuthTabs } from './AuthUI'
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'

export const AuthFormSection = () => {
    const [activeTab, setActiveTab] = useState<'login' | 'register'>('login')

    return (
        <section className="w-full lg:w-1/2 flex items-center justify-center bg-white p-8 md:p-16">
            <div className="w-full max-w-md space-y-10">
                {/* Mobile Branding (visible only on mobile) */}
                <div className="lg:hidden flex items-center gap-2 mb-12">
                    <span className="text-2xl font-extrabold text-[#041534] tracking-tighter">Amaken</span>
                </div>

                <div className="space-y-2">
                    <h2 className="text-3xl font-extrabold text-[#041534]">
                        {activeTab === 'login' ? 'Welcome Back' : 'Join the Sovereign Archive'}
                    </h2>
                    <p className="text-[#75777f] text-sm">
                        {activeTab === 'login'
                            ? 'Access your appraisal dashboard and reports.'
                            : 'Create your institutional account to start valuing assets.'}
                    </p>
                </div>

                <AuthTabs activeTab={activeTab} onTabChange={setActiveTab} />

                {activeTab === 'login' ? <LoginForm /> : <RegisterForm />}

                {/* Footer for Auth */}
                <div className="pt-8 text-center border-t border-[#f2f4f6]">
                    <p className="text-xs text-[#75777f] leading-relaxed">
                        By continuing, you agree to our{' '}
                        <a className="text-[#041534] font-bold hover:underline" href="#">Terms of Service</a> and{' '}
                        <a className="text-[#041534] font-bold hover:underline" href="#">Privacy Policy</a>.
                    </p>
                </div>
            </div>
        </section>
    )
}
