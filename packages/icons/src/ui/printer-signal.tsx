import type { Icon } from './types'

export const IconPrinterSignal: Icon = ({
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
      data-slot='icon-ui-printer-signal'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.6 14.9c0-1.85 0-2.78.3-3.51A4 4 0 0 1 4.07 9.2c.74-.3 1.66-.3 3.52-.3h4.35c1.85 0 2.78 0 3.51.3a4 4 0 0 1 2.18 2.18c.3.73.3 1.66.3 3.51v2.43a2.07 2.07 0 0 1-4.1.38l-.01-.04a2.1 2.1 0 0 0-2.08-1.72H7.7a2.1 2.1 0 0 0-2.08 1.72l-.02.08a2.02 2.02 0 0 1-4-.37z'
        fill='currentColor'
      />
      <path
        d='M5.21 19.4c-.57 0-.85 0-1.1-.04a3 3 0 0 1-2.47-2.48c-.04-.24-.04-.53-.04-1.1v-1.63c0-2.1 0-3.15.5-3.9a3 3 0 0 1 .84-.84c.75-.5 1.8-.5 3.9-.5h5.85c2.1 0 3.15 0 3.9.5a3 3 0 0 1 .84.84c.5.75.5 1.8.5 3.9v1.6c0 .6 0 .9-.04 1.16a3 3 0 0 1-2.45 2.44c-.26.05-.56.05-1.16.05'
        stroke='currentColor'
      />
      <path
        d='M8.62 22.27h2.26c1.39 0 2.08 0 2.57-.3a2 2 0 0 0 .78-.91c.22-.53.12-1.21-.1-2.58-.15-1.04-.23-1.56-.5-1.94a2 2 0 0 0-.76-.65c-.41-.2-.94-.2-1.99-.2H8.62c-1.06 0-1.59 0-2 .2a2 2 0 0 0-.76.66c-.27.38-.35.9-.5 1.95-.2 1.36-.3 2.04-.07 2.57a2 2 0 0 0 .78.9c.48.3 1.17.3 2.55.3'
        stroke='currentColor'
      />
      <path
        d='m14.06 8.91-.12-.47c-.36-1.45-.55-2.18-1.09-2.6s-1.29-.42-2.79-.42h-.6c-1.51 0-2.27 0-2.82.43-.54.42-.72 1.16-1.07 2.63l-.1.43'
        stroke='currentColor'
      />
      <path
        d='M15.1 12.23a.37.37 0 1 1-.75 0 .37.37 0 0 1 .75 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M16.1 5.15c.56.07 1.42.32 2.12 1.02s.93 1.42 1.01 2.12' stroke='currentColor' />
      <path d='M15.8 1.67c1.19.13 3 .67 4.47 2.13a7 7 0 0 1 2.14 4.47' stroke='currentColor' />
    </svg>
  )
}
