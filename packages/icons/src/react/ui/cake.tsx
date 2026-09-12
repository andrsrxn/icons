import type { Icon } from './types'

export const IconCake: Icon = ({
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
      data-slot='icon-ui-cake'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M2.85 17.67c0-.95 0-1.43.16-1.8a2 2 0 0 1 1.06-1.06c.37-.16.85-.16 1.8-.16h.83c.46 0 .88-.22 1.15-.6a1.4 1.4 0 0 1 1.98-.3l.79.56.42.3a2 2 0 0 0 1.93 0c.1-.05.21-.13.43-.28l.89-.63a1.34 1.34 0 0 1 1.89.35c.24.37.66.6 1.11.6h.88c.91 0 1.37 0 1.73.14.5.2.9.6 1.1 1.1.15.37.15.82.15 1.74v.22c0 1.12 0 1.68-.22 2.1a2 2 0 0 1-.87.88c-.43.22-1 .22-2.11.22H6.05c-1.12 0-1.68 0-2.1-.22a2 2 0 0 1-.88-.87c-.22-.43-.22-1-.22-2.11z'
        fill='currentColor'
      />
      <circle
        opacity='.2'
        cx='12.14'
        cy='6.49'
        r='2.05'
        transform='rotate(90 12.14 6.49)'
        fill='currentColor'
      />
      <path
        d='M3.17 13.53s.4 1.43 2.3 1.43c.87 0 1.6-.45 2.16-.94.59-.53.88-.8 1.07-.8s.49.27 1.08.79c.56.5 1.31.95 2.18.95s1.65-.46 2.24-.97.9-.77 1.09-.77.5.28 1.1.83c.53.48 1.26.91 2.15.91 1.58 0 2.26-1.43 2.26-1.43'
        stroke='currentColor'
      />
      <path
        d='M20.83 20.97v-6.09c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H9.17c-2.82 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v6.09'
        stroke='currentColor'
      />
      <circle
        cx='12.14'
        cy='6.66'
        r='2.22'
        transform='rotate(90 12.14 6.66)'
        stroke='currentColor'
      />
      <path d='M12.14 4.44c0-.64.43-2.1 1.47-2.36' stroke='currentColor' />
      <path d='M1.42 20.97h21.16' stroke='currentColor' />
    </svg>
  )
}
