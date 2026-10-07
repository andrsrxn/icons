import type { Icon } from './types'

export const IconSafetyPin: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-safety-pin'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle
        opacity='.2'
        cx='4.7'
        cy='19.47'
        r='2.81'
        transform='rotate(135.7 4.7 19.47)'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='m21.62 10.4.63-4.52c.03-.23.04-.35 0-.45-.02-.11-.1-.2-.26-.37l-2.62-2.8c-.17-.19-.25-.28-.36-.32-.12-.04-.24-.03-.48 0l-4.94.56c-.22.03-.33.04-.43.1-.09.05-.15.14-.28.33l-1.63 2.4c-.34.5-.5.74-.43.98s.36.33.93.53l.35.12c.21.07.32.1.43.1.1-.01.2-.07.4-.18l2.72-1.56c.34-.2.51-.3.69-.26s.3.18.56.47l1.54 1.78c.25.28.37.42.38.6s-.1.32-.32.63l-1.65 2.33c-.22.32-.34.48-.33.65s.15.32.41.61l.33.35c.26.28.39.42.56.44s.34-.07.67-.26l2.64-1.53c.2-.12.31-.18.38-.27.06-.1.08-.22.11-.46'
        fill='currentColor'
      />
      <path
        d='M10.97 5.54a5.77 5.77 0 0 1 9.69-2.04 5.8 5.8 0 0 1-.3 8.18 4.6 4.6 0 0 1-2.6 1.36'
        stroke='currentColor'
      />
      <path
        d='M11.17 5.05c-.14.34-.2.5-.22.66a1 1 0 0 0 .27.76c.11.12.27.2.58.38l.32.17c.38.21.58.32.75.3l.13-.05c.15-.06.28-.3.54-.78q.15-.28.34-.46a2.4 2.4 0 0 1 1.82-.61 3 3 0 0 1 1.9.93c1.04 1.12 1.06 2.8.05 3.73q-.2.18-.42.3c-.53.28-.8.42-.86.56l-.05.14c-.03.15.06.35.25.75l.12.26c.16.35.24.53.36.65a1 1 0 0 0 .66.3c.17.02.36-.04.73-.15'
        stroke='currentColor'
      />
      <circle
        cx='4.7'
        cy='19.47'
        r='2.81'
        transform='rotate(135.7 4.7 19.47)'
        stroke='currentColor'
      />
      <path d='M7 6.44 2.27 18.02' stroke='currentColor' />
      <path d='M16.67 12.32 7 21.12' stroke='currentColor' />
    </svg>
  )
}
