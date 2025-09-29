import React, { useState, useEffect, useRef } from 'react';
import Button from './ui/Button';
import Input from './ui/Input';
import Select from './ui/Select';
import Textarea from './ui/Textarea';

const LeadForm: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        startupName: '',
        ideaDescription: '',
        startupStage: '',
        prototypePlatform: '',
    });

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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // In a real app, you would send this data to a server
        console.log('Form submitted:', formData);
        alert('Thank you for your submission! We will be in touch shortly.');
        // Optionally reset form
        setFormData({
            fullName: '', email: '', startupName: '', ideaDescription: '',
            startupStage: '', prototypePlatform: '',
        });
    };

    return (
        <div>
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Get Your Clickable AI Prototype Now</h2>
                <p className="mt-2 text-sm text-gray-600">Takes less than 2 minutes to get started</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <Input label="Full Name *" id="fullName" name="fullName" placeholder="Enter your full name" value={formData.fullName} onChange={handleChange} required ref={fullNameRef} />
                <Input label="Email Address *" id="email" name="email" type="email" placeholder="We’ll send your prototype updates here" value={formData.email} onChange={handleChange} required />
                <Input label="Startup Name (Optional)" id="startupName" name="startupName" placeholder="Helps us tailor your prototype" value={formData.startupName} onChange={handleChange} />
                <Textarea label="Brief Idea Description (Optional)" id="ideaDescription" name="ideaDescription" value={formData.ideaDescription} onChange={handleChange} placeholder="Describe your idea in 2–3 sentences" />
                <Select label="Stage of Your Startup (Optional)" id="startupStage" name="startupStage" value={formData.startupStage} onChange={handleChange}>
                    <option value="">Select your startup stage</option>
                    <option value="idea">Idea</option>
                    <option value="mvp">MVP</option>
                    <option value="pre-launch">Pre-Launch</option>
                    <option value="launched">Launched</option>
                </Select>
                 <Select label="Preferred Prototype Platform (Optional)" id="prototypePlatform" name="prototypePlatform" value={formData.prototypePlatform} onChange={handleChange}>
                    <option value="">Select a platform</option>
                    <option value="web">Web</option>
                    <option value="mobile">Mobile</option>
                    <option value="both">Both</option>
                </Select>
                <div>
                    <Button type="submit" className="w-full !py-3 !text-base">
                        Get Started Now →
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