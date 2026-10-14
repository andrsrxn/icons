import type { Icon } from './types'

export const IconImageSwap: Icon = ({
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
      data-slot='icon-ui-image-swap'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M19 9.24v-1c0-1.88 0-2.83-.58-3.41-.6-.59-1.53-.59-3.42-.59h-.23'
        stroke='currentColor'
      />
      <path d='M5.02 14.7v1c0 1.88 0 2.82.58 3.4.59.6 1.53.6 3.42.6h.23' stroke='currentColor' />
      <path
        d='M21.56 7.91C20.5 9 19.96 9.53 19.3 9.62a2 2 0 0 1-.6 0c-.65-.1-1.18-.63-2.26-1.7'
        stroke='currentColor'
      />
      <path
        d='M2.45 15.98c1.08-1.08 1.61-1.62 2.26-1.71a2 2 0 0 1 .6 0c.65.1 1.2.63 2.27 1.7'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M11.84 5.83c0-1 0-1.5-.12-1.9a3 3 0 0 0-2.05-2.05c-.4-.12-.9-.12-1.9-.12H5.26c-.45 0-.68 0-.86.03a3 3 0 0 0-2.6 2.6c-.02.18-.02.41-.02.87 0 .42 0 .63.02.73a1 1 0 0 0 1.69.5c.07-.07.18-.24.41-.6l.23-.33a1 1 0 0 1 1.52.04l.22.34.73 1.25.24.39a1 1 0 0 0 1.3.17q.1-.06.34-.3l.13-.12.04-.04a1 1 0 0 1 1.41.06l.1.09a1 1 0 0 0 1.68-.69z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M22.25 17.34c0-1 0-1.5-.12-1.9a3 3 0 0 0-2.05-2.05c-.4-.12-.9-.12-1.9-.12h-2.51c-.45 0-.68 0-.86.02a3 3 0 0 0-2.6 2.6c-.03.19-.03.42-.03.87q0 .61.02.73a1 1 0 0 0 1.7.5q.09-.08.4-.59l.24-.33a1 1 0 0 1 1.52.03q.06.08.21.35l.74 1.25q.16.29.24.38a1 1 0 0 0 1.3.18q.1-.07.34-.3l.13-.13.04-.04a1 1 0 0 1 1.37.02l.04.04.1.1a1 1 0 0 0 1.68-.7z'
        fill='currentColor'
      />
      <rect x='1.78' y='1.76' width='10.06' height='9.07' rx='2' stroke='currentColor' />
      <rect x='12.18' y='13.27' width='10.06' height='9.07' rx='2' stroke='currentColor' />
      <path
        d='m2.01 8.63 2.22-2.66c.37-.45.56-.68.82-.67.25 0 .42.24.77.7l.98 1.36c.3.41.45.62.68.64s.6-.34 1-.7c.3-.28.57-.5.77-.5s.36.14.7.41l1.7 1.42'
        stroke='currentColor'
      />
      <path
        d='m12.42 20.14 2.22-2.67c.37-.45.56-.67.82-.67s.42.24.77.71l.98 1.35c.3.42.45.62.68.64s.6-.33 1-.69c.3-.28.57-.5.77-.5s.36.13.7.4l1.7 1.43'
        stroke='currentColor'
      />
    </svg>
  )
}
