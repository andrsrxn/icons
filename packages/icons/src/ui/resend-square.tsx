import type { Icon } from './types'

export const IconResendSquare: Icon = ({
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
      data-slot='icon-ui-resend-square'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M12.2 22c3.77 0 5.66 0 6.83-1.17S20.2 17.77 20.2 14v-.78c0-.85 0-1.27-.27-1.41s-.62.1-1.3.6l-.47.32c-.58.4-.86.61-1.12.5-.25-.1-.32-.44-.44-1.14l-.2-1.1c-.09-.44-.13-.67-.3-.79s-.38-.08-.83-.01l-4.67.69q-.13.01-.19.04l-.17.08-.6.35c-1.27.73-1.91 1.1-2.18.83s.09-.9.81-2.19l1.38-2.45q.12-.2.2-.28.07-.07.3-.15l5.74-2.34.16-.07a.5.5 0 0 0 .2-.25q.03-.05.04-.17c.04-.2.06-.29.05-.36a.5.5 0 0 0-.35-.42q-.09-.04-.36-.03H9.68c-3.78 0-5.66 0-6.83 1.17-1.17 1.18-1.17 3.06-1.17 6.83V14c0 3.77 0 5.66 1.17 6.83S5.9 22 9.68 22z'
        fill='currentColor'
      />
      <path
        d='m19.58 4.06.97 1c1.28 1.31 1.92 1.97 1.92 2.78 0 .82-.64 1.48-1.92 2.8l-.93.94c-1.39 1.43-2.08 2.14-2.68 1.93l-.1-.04c-.57-.27-.57-1.26-.57-3.25-2.02 0-3.76-.59-7.56 1.8-1.01.64-1.52.96-1.8.71-.28-.24-.05-.74.4-1.73 1.66-3.6 4.84-5.6 8.96-5.6 0-1.93 0-2.9.54-3.17l.16-.07c.58-.18 1.26.51 2.6 1.9'
        stroke='currentColor'
      />
      <path
        d='M9.1 3.47c-3.21 0-4.82 0-5.91.87a4 4 0 0 0-.65.65c-.86 1.09-.86 2.7-.86 5.9V14c0 3.78 0 5.67 1.17 6.84S5.9 22 9.68 22h4.89c1.52 0 2.28 0 2.9-.2A4 4 0 0 0 20 19.25c.2-.62.2-1.37.2-2.9'
        stroke='currentColor'
      />
    </svg>
  )
}
