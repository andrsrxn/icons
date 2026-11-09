import type { Icon } from './types'

export const IconMedalSecond: Icon = ({
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
      data-slot='icon-ui-medal-second'
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
        d='M7.97 3.97c-.77.02-1.15.04-1.44.14A2 2 0 0 0 5.2 5.76c-.04.3.04.68.18 1.43v0c.06.3.09.46.1.6a2 2 0 0 1-.24 1.03c-.07.13-.16.26-.34.5v0a5 5 0 0 0-.79 1.22 2 2 0 0 0 .47 2.06c.22.22.56.4 1.23.75v0c.28.14.41.22.53.3a2 2 0 0 1 .66.83c.06.13.1.28.18.58v0c.2.74.3 1.11.46 1.37a2 2 0 0 0 1.9.92c.3-.04.66-.19 1.36-.5v0c.28-.12.42-.19.56-.22a2 2 0 0 1 1.06 0c.14.03.28.1.56.22v0c.7.31 1.05.46 1.36.5a2 2 0 0 0 1.9-.92c.17-.26.27-.63.46-1.37v0c.08-.3.12-.45.18-.58a2 2 0 0 1 .66-.83c.12-.08.25-.16.53-.3v0c.67-.36 1.01-.53 1.23-.75a2 2 0 0 0 .47-2.06c-.1-.3-.33-.6-.79-1.21v0a4 4 0 0 1-.34-.5 2 2 0 0 1-.24-1.03c.01-.15.04-.3.1-.6v0c.14-.76.22-1.13.18-1.44a2 2 0 0 0-1.32-1.65c-.29-.1-.67-.12-1.44-.14v0a4 4 0 0 1-.6-.05 2 2 0 0 1-.95-.45c-.12-.1-.22-.22-.42-.45v0a5 5 0 0 0-1-1.04 2 2 0 0 0-2.11 0c-.27.16-.52.46-1.01 1.04v0c-.2.23-.3.35-.42.45a2 2 0 0 1-.95.45c-.14.03-.3.04-.6.05'
        stroke='currentColor'
      />
      <path
        d='m17.12 14.2 2.47 4.28c.43.75.65 1.13.48 1.39-.17.25-.6.2-1.46.1l-.75-.08c-.35-.04-.53-.06-.67.02s-.22.25-.36.57l-.3.7c-.35.8-.52 1.2-.83 1.21s-.52-.36-.96-1.11L12.27 17'
        stroke='currentColor'
      />
      <path
        d='m6.88 14.2-2.47 4.28c-.43.75-.65 1.13-.48 1.39.17.25.6.2 1.46.1l.75-.08c.36-.04.53-.06.68.02.14.08.21.25.35.57l.3.7c.35.8.52 1.2.83 1.21s.52-.36.96-1.11L11.73 17'
        stroke='currentColor'
      />
      <path
        d='M10.31 7.45c.64-1.04 2.96-1.11 2.96.86 0 1.37-1.73 2.05-2.79 3.68-.2.3.04.68.4.68h2.46'
        stroke='currentColor'
      />
    </svg>
  )
}
