import type { Icon } from './types'

export const IconFarm: Icon = ({
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
      data-slot='icon-ui-farm'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M8.74 12.77c-.04.97-.06 1.46.24 1.77.29.3.78.3 1.75.3h.16c.95 0 1.42 0 1.71-.29.3-.3.3-.76.3-1.7v-1.06c0-.33 0-.5.04-.64a1 1 0 0 1 .19-.34c.1-.12.24-.2.52-.38.3-.2.46-.3.63-.34a1 1 0 0 1 .43 0c.17.04.33.13.64.33l.06.03c.32.2.48.3.6.44l.13.23c.07.16.08.35.1.73l.04 1.09c.05.9.07 1.35.36 1.63s.74.27 1.64.27h.12c.98 0 1.46 0 1.76-.3s.28-.8.24-1.77l-.15-4.1c-.02-.48-.03-.72-.13-.92s-.3-.35-.7-.63l-3.67-2.66c-.57-.4-.85-.61-1.18-.61s-.6.2-1.17.61L9.72 7.12c-.39.28-.58.42-.69.63-.1.2-.12.44-.13.92z'
        fill='currentColor'
      />
      <path d='M20.3 14.86V8.08' stroke='currentColor' />
      <path
        d='M12.82 14.74v-2.83c0-.7 0-1.04.17-1.29a1 1 0 0 1 .28-.29c.25-.16.6-.16 1.3-.16.68 0 1.03 0 1.28.16a1 1 0 0 1 .29.3c.16.24.16.59.16 1.28v2.83'
        stroke='currentColor'
      />
      <path d='M1.71 14.86h20.7' stroke='currentColor' />
      <path d='m2 21.37 2.44-3.82' stroke='currentColor' />
      <path d='m6.2 21.37 2.45-3.82' stroke='currentColor' />
      <path d='m10.4 21.37 2.45-3.82' stroke='currentColor' />
      <path d='M16.53 18.02h5.88' stroke='currentColor' />
      <path d='M14.94 21.1h7.47' stroke='currentColor' />
      <path
        d='M8.82 14.85V5.54c0-1.03 0-1.54-.24-1.91a2 2 0 0 0-.44-.45c-.38-.24-.89-.24-1.92-.24s-1.54 0-1.9.24a2 2 0 0 0-.45.45c-.24.37-.24.88-.24 1.9v9.32'
        stroke='currentColor'
      />
      <path
        d='m21.54 8.9-5.72-4.56c-.6-.48-.9-.71-1.24-.71-.35 0-.65.23-1.25.7l-4.5 3.58'
        stroke='currentColor'
      />
    </svg>
  )
}
