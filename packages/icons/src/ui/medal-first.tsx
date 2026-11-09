import type { Icon } from './types'

export const IconMedalFirst: Icon = ({
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
      data-slot='icon-ui-medal-first'
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
        d='M7.96 3.96a5 5 0 0 0-1.44.14 2 2 0 0 0-1.31 1.65c-.04.3.03.68.18 1.43v0c.06.3.09.46.1.6a2 2 0 0 1-.24 1.03c-.07.14-.16.26-.35.5v0a5 5 0 0 0-.79 1.23 2 2 0 0 0 .47 2.05c.22.22.56.4 1.24.75v0c.27.15.41.22.53.3a2 2 0 0 1 .66.83c.06.14.1.29.17.59v0c.2.74.3 1.1.47 1.37a2 2 0 0 0 1.9.91 5 5 0 0 0 1.36-.5v0c.28-.12.42-.18.56-.22a2 2 0 0 1 1.06 0c.14.04.28.1.56.23v0c.7.3 1.06.46 1.37.5a2 2 0 0 0 1.9-.92c.16-.26.26-.63.46-1.37v0c.07-.3.11-.45.17-.59a2 2 0 0 1 .66-.82c.12-.09.26-.16.53-.3v0a5 5 0 0 0 1.24-.76 2 2 0 0 0 .47-2.05c-.1-.3-.33-.6-.8-1.22v0a4 4 0 0 1-.34-.5 2 2 0 0 1-.23-1.03c0-.15.03-.3.1-.6v0c.14-.76.2-1.13.17-1.44a2 2 0 0 0-1.31-1.65 5 5 0 0 0-1.44-.14v0a4 4 0 0 1-.61-.05 2 2 0 0 1-.95-.45c-.11-.1-.21-.22-.42-.45v0a5 5 0 0 0-1-1.04 2 2 0 0 0-2.11 0A5 5 0 0 0 9.94 3v0c-.2.23-.3.35-.42.45a2 2 0 0 1-.95.45c-.14.03-.3.04-.6.05'
        stroke='currentColor'
      />
      <path
        d='m17.12 14.2 2.48 4.28c.43.75.65 1.13.48 1.38-.17.26-.6.21-1.46.11l-.76-.08h0c-.35-.04-.53-.06-.67.02s-.22.25-.36.57h0l-.3.7c-.35.8-.52 1.2-.83 1.21s-.52-.36-.95-1.11L12.27 17'
        stroke='currentColor'
      />
      <path
        d='M6.88 14.2 4.4 18.48c-.44.75-.66 1.13-.49 1.38.17.26.6.21 1.47.11l.75-.08h0c.35-.04.53-.06.67.02s.22.25.36.57h0l.3.7c.35.8.52 1.2.83 1.21s.52-.36.95-1.11L11.73 17'
        stroke='currentColor'
      />
      <path
        d='m10.4 7.61.38-.23c.68-.44 1.02-.65 1.27-.5.26.13.26.54.26 1.34v4.32'
        stroke='currentColor'
      />
    </svg>
  )
}
