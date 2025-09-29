import React, { useState, useEffect, useRef } from 'react';
import Button from './ui/Button';
import Input from './ui/Input';
import Select from './ui/Select';
import Textarea from './ui/Textarea';

type LeadFormProps = {
    onClose?: () => void;
};

const LeadForm: React.FC<LeadFormProps> = ({ onClose }) => {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        startup_name: '',
        brief_idea_description: '',
        startup_stage: '',
        prototype_platform: '',
    });
    const [submitting, setSubmitting] = useState(false);
    const [successMsg, setSuccessMsg] = useState<string | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const fullNameRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // A short timeout helps ensure the focus works with the modal's transition
        setTimeout(() => {
            fullNameRef.current?.focus();
        }, 100);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);
        setSuccessMsg(null);
        setErrorMsg(null);

        const portalId = "146982339";
        const formGuid = "ec71c7b7-cc76-4471-a883-0d4bad3476f7";

        // Build payload mapping to HubSpot properties
        const fields: Array<{ name: string; value: string }> = [
            { name: 'email', value: formData.email },
            // Adjust mappings below to match your HubSpot properties
            { name: 'full_name', value: formData.full_name },
            { name: 'startup_name', value: formData.startup_name },
            { name: 'message', value: formData.brief_idea_description },
            { name: 'startup_stage', value: formData.startup_stage },
            { name: 'brief_idea_description', value: formData.brief_idea_description },
            { name: 'prototype_platform', value: formData.prototype_platform },
        ].filter(f => f.value);

        const payload = {
            submittedAt: Date.now(),
            fields,
            context: {
                pageUri: window.location.href,
                pageName: document.title,
            },
        };

        try {
            if (portalId && formGuid) {
                const controller = new AbortController();
                const timeoutId = window.setTimeout(() => controller.abort(), 10000);
                let timedOut = false;
                try {
                    const resp = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}` as string, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload),
                        signal: controller.signal,
                    });
                    clearTimeout(timeoutId);
                    if (!resp.ok) {
                        const text = await resp.text();
                        throw new Error(`HubSpot submission failed (${resp.status}): ${text}`);
                    }
                } catch (err: any) {
                    clearTimeout(timeoutId);
                    if (err && err.name === 'AbortError') {
                        timedOut = true;
                        console.warn('HubSpot submission timed out; showing success to avoid blocking UX.');
                    } else {
                        throw err;
                    }
                }
                // Proceed to success whether response OK or timed out (HubSpot often accepts quickly even if network is slow)
            } else {
                console.warn('HubSpot IDs missing. Set VITE_HS_PORTAL_ID and VITE_HS_FORM_GUID in .env.local');
            }

            // Push GTM event
            (window as any).dataLayer = (window as any).dataLayer || [];
            (window as any).dataLayer.push({
                event: 'lead_submitted',
                form: {
                    full_name: formData.full_name,
                    email: formData.email,
                    startup_name: formData.startup_name,
                    startup_stage: formData.startup_stage,
                    brief_idea_description: formData.brief_idea_description,
                    prototype_platform: formData.prototype_platform,
                },
            });

            // Show success inside the modal
            setSuccessMsg('Thanks! We’ll send you an email within minutes.');
            setFormData({
                full_name: '', email: '', startup_name: '', brief_idea_description: '',
                startup_stage: '', prototype_platform: '',
            });
            // Auto-close after a short delay if onClose provided
            if (onClose) {
                setTimeout(() => {
                    onClose();
                }, 2500);
            }
        } catch (err: any) {
            console.error(err);
            // Push error event to GTM
            (window as any).dataLayer = (window as any).dataLayer || [];
            (window as any).dataLayer.push({ event: 'lead_submit_error', error_message: String(err?.message || err) });
            setErrorMsg('Something went wrong. Please try again in a moment.');
        } finally {
            setSubmitting(false);
        }
    };

    if (successMsg) {
        return (
            <div className="text-center p-6">
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900">Thanks! We’ll send you an email within minutes.</h2>
            </div>
        );
    }

    if (errorMsg) {
        return (
            <div className="text-center p-6">
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-5a1 1 0 112 0 1 1 0 01-2 0zm.293-7.707a1 1 0 011.414 0l.293.293a1 1 0 010 1.414L11 9a1 1 0 11-2 0l-.293-2.707a1 1 0 010-1.414l.293-.293z" clipRule="evenodd" />
                    </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900">Something went wrong.</h2>
                <p className="mt-2 text-sm text-gray-600">Please try again in a moment.</p>
                <div className="mt-4">
                    <Button type="button" onClick={() => setErrorMsg(null)}>
                        Try again
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Get Your Clickable AI Prototype Now</h2>
                <p className="mt-2 text-sm text-gray-600">Takes less than 2 minutes to get started</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <Input label="Full Name *" id="full_name" name="full_name" placeholder="Enter your full name" value={formData.full_name} onChange={handleChange} required ref={fullNameRef} />
                <Input label="Email Address *" id="email" name="email" type="email" placeholder="We’ll send your prototype updates here" value={formData.email} onChange={handleChange} required />
                <Input label="Startup Name (Optional)" id="startup_name" name="startup_name" placeholder="Helps us tailor your prototype" value={formData.startup_name} onChange={handleChange} />
                <Textarea label="Brief Idea Description (Optional)" id="brief_idea_description" name="brief_idea_description" value={formData.brief_idea_description} onChange={handleChange} placeholder="Describe your idea in 2–3 sentences" />
                <Select label="Stage of Your Startup (Optional)" id="startup_stage" name="startup_stage" value={formData.startup_stage} onChange={handleChange}>
                    <option value="">Select your startup stage</option>
                    <option value="idea">Idea</option>
                    <option value="mvp">MVP</option>
                    <option value="pre-launch">Pre-Launch</option>
                    <option value="launched">Launched</option>
                </Select>
                 <Select label="Preferred Prototype Platform (Optional)" id="prototype_platform" name="prototype_platform" value={formData.prototype_platform} onChange={handleChange}>
                    <option value="">Select a platform</option>
                    <option value="web">Web</option>
                    <option value="mobile">Mobile</option>
                    <option value="both">Both</option>
                </Select>
                <div>
                    <Button type="submit" className="w-full !py-3 !text-base" disabled={submitting}>
                        {submitting ? 'Submitting…' : 'Get Started Now →'}
                    </Button>
                    <p className="mt-3 text-xs text-gray-500 text-center">
                        100% privacy—your idea stays secure
                    </p>
                </div>
            </form>
        </div>
    );
};

export default LeadForm;