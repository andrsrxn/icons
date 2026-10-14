import type { Icon } from './types'

export const IconMoonWaves: Icon = ({
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
      data-slot='icon-ui-moon-waves'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='m18.78 18-7.27-1.12-6.46-.28c-1.26-1.6-2.08-3.24-2.08-5.43 0-5.22 3.39-7.89 5.81-8.48 0 0-1.48 5.02 2.3 9.69 3.25 3.24 6.92 2.22 8.84 1.7.78-.22 1.27-.36 1.33-.1.09.38-1.27 2.68-2.47 4.02'
        fill='currentColor'
      />
      <path
        d='M4.79 16.24c-1.15-1.12-1.82-3.28-1.82-5.07a9.5 9.5 0 0 1 4.59-8.1c.9-.55 1.35-.82 1.62-.6.27.2.09.8-.27 1.98-.65 2.13-.86 5.3 2.1 8.01 2.5 2.3 5.77 2.02 7.88 1.5.97-.24 1.46-.36 1.66-.11.2.24 0 .65-.4 1.45a10 10 0 0 1-1.72 2.61'
        stroke='currentColor'
      />
      <path
        d='M1.3 17.63c.82-.57 3.15-1.57 6.31-1.57s6.93 2.02 10 2.02 4.5-1.1 5.1-1.69'
        stroke='currentColor'
      />
      <path
        d='M3.8 20.53a9.6 9.6 0 0 1 4.97-.87c2.44.17 5.25 1.9 7.63 2.05 2.37.16 3.37-.45 4.02-.82'
        stroke='currentColor'
      />
    </svg>
  )
}
