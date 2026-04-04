'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { isRtl, type Locale } from '@/i18n/config';
import clsx from 'clsx';

interface FormData {
  name: string;
  company: string;
  sector: string;
  serviceType: string;
  whatsapp: string;
  message: string;
}

interface InquiryFormProps {
  locale: Locale;
  variant?: 'default' | 'compact';
}

export default function InquiryForm({ locale, variant = 'default' }: InquiryFormProps) {
  const t = useTranslations('contact.form');
  const rtl = isRtl(locale);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const sectors: string[] = t.raw('sectors');
  const serviceTypes: string[] = t.raw('serviceTypes');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    // Simulate form submission (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    // For demo: always succeeds
    setStatus('success');
    reset();
    setTimeout(() => setStatus('idle'), 6000);
  };

  const inputClass = (hasError?: boolean) =>
    clsx(
      'w-full bg-white border rounded-lg px-4 py-3 text-ink text-sm placeholder-ink-faint transition-all duration-200 outline-none',
      'focus:ring-2 focus:ring-accent/30 focus:border-accent',
      hasError ? 'border-red-400' : 'border-surface-border hover:border-ink-faint'
    );

  const labelClass = 'block text-ink-muted text-xs font-semibold uppercase tracking-wider mb-1.5';

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
          <CheckCircle size={32} className="text-green-500" />
        </div>
        <h3 className="text-primary-dark font-bold text-xl mb-2">{t('success')}</h3>
        <p className="text-ink-muted text-sm">{t('success')}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
      dir={rtl ? 'rtl' : 'ltr'}
      noValidate
    >
      {/* Row 1: Name + Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>{t('name')}</label>
          <input
            {...register('name', { required: true, minLength: 2 })}
            type="text"
            placeholder={t('namePlaceholder')}
            className={inputClass(!!errors.name)}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">Required</p>
          )}
        </div>
        <div>
          <label className={labelClass}>{t('company')}</label>
          <input
            {...register('company', { required: true })}
            type="text"
            placeholder={t('companyPlaceholder')}
            className={inputClass(!!errors.company)}
          />
        </div>
      </div>

      {/* Row 2: Sector + Service Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>{t('sector')}</label>
          <select
            {...register('sector', { required: true })}
            className={clsx(inputClass(!!errors.sector), 'cursor-pointer')}
          >
            <option value="">{t('sectorPlaceholder')}</option>
            {sectors.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>{t('serviceType')}</label>
          <select
            {...register('serviceType', { required: true })}
            className={clsx(inputClass(!!errors.serviceType), 'cursor-pointer')}
          >
            <option value="">{t('serviceTypePlaceholder')}</option>
            {serviceTypes.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* WhatsApp */}
      <div>
        <label className={labelClass}>{t('whatsapp')}</label>
        <input
          {...register('whatsapp')}
          type="tel"
          placeholder={t('whatsappPlaceholder')}
          className={inputClass()}
        />
      </div>

      {/* Message */}
      <div>
        <label className={labelClass}>{t('message')}</label>
        <textarea
          {...register('message', { required: true, minLength: 20 })}
          rows={variant === 'compact' ? 4 : 5}
          placeholder={t('messagePlaceholder')}
          className={clsx(inputClass(!!errors.message), 'resize-none')}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">Please provide more details</p>
        )}
      </div>

      {/* Error state */}
      {status === 'error' && (
        <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          <AlertCircle size={16} className="text-red-500 shrink-0" />
          <p className="text-red-600 text-sm">{t('error')}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className={clsx(
          'w-full bg-accent hover:bg-accent-dark text-white font-bold py-3.5 px-6 rounded-lg transition-all duration-200',
          'text-sm uppercase tracking-wider shadow-md hover:shadow-lg',
          status === 'loading' ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-0.5'
        )}
      >
        {status === 'loading' ? t('submitting') : t('submit')}
      </button>
    </form>
  );
}
