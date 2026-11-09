import type { Icon } from './types'

export const IconMedalThird: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-medal-third'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m12.32 17.17 3.36-.16 1.41-2.85 3.33 5.77-3.16.04-1.6 2.7z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='m11.5 17.17-3.35-.16-1.41-2.85-3.33 5.77 3.16.04 1.6 2.7z'
        fill='currentColor'
      />
      <path
        d='M7.96 3.97a5 5 0 0 0-1.44.14 2 2 0 0 0-1.3 1.65c-.05.3.03.68.17 1.43v0c.06.3.09.46.1.6a2 2 0 0 1-.24 1.03 3 3 0 0 1-.35.5v0c-.45.62-.68.93-.78 1.22a2 2 0 0 0 .47 2.06c.22.22.56.4 1.23.75v0c.28.14.41.22.53.3a2 2 0 0 1 .66.83c.06.13.1.28.18.58v0c.2.74.3 1.11.46 1.37a2 2 0 0 0 1.9.92c.3-.04.66-.19 1.36-.5v0c.28-.12.42-.19.56-.22a2 2 0 0 1 1.06 0c.14.03.28.1.56.22v0c.7.31 1.05.46 1.36.5a2 2 0 0 0 1.9-.92c.17-.26.27-.63.46-1.37v0c.08-.3.12-.45.18-.58a2 2 0 0 1 .66-.83c.12-.08.25-.16.53-.3v0c.67-.36 1.01-.53 1.23-.75a2 2 0 0 0 .47-2.06c-.1-.3-.33-.6-.78-1.21v0a4 4 0 0 1-.35-.5 2 2 0 0 1-.24-1.03c.01-.15.04-.3.1-.6v0a5 5 0 0 0 .18-1.44 2 2 0 0 0-1.31-1.65 5 5 0 0 0-1.45-.14v0c-.3-.02-.46-.02-.6-.05a2 2 0 0 1-.95-.45c-.11-.1-.22-.22-.42-.45v0c-.5-.59-.74-.88-1-1.04a2 2 0 0 0-2.11 0c-.27.16-.52.45-1.01 1.04v0c-.2.23-.3.35-.42.45a2 2 0 0 1-.95.45c-.14.03-.3.03-.6.05'
        stroke='currentColor'
      />
      <path
        d='m17.12 14.2 2.47 4.28c.44.75.65 1.13.48 1.39-.17.25-.6.2-1.46.1l-.75-.08c-.35-.04-.53-.06-.67.02s-.22.25-.36.57l-.3.7c-.35.8-.52 1.2-.83 1.21s-.52-.36-.96-1.11L12.27 17'
        stroke='currentColor'
      />
      <path
        d='m6.88 14.2-2.47 4.28c-.43.75-.65 1.13-.48 1.39.17.25.6.2 1.46.1l.75-.08c.36-.04.53-.06.68.02.14.08.21.25.35.57l.3.7c.35.8.52 1.2.83 1.21s.52-.36.96-1.11L11.73 17'
        stroke='currentColor'
      />
      <path
        d='M10.38 12.01c.7 1.14 3.24 1.22 3.24-.94 0-1.08-.84-1.4-1.74-1.42.8-.02 1.55-.4 1.55-1.42 0-2.04-2.39-1.96-3.05-.89'
        stroke='currentColor'
      />
    </svg>
  )
}
