import type { Icon } from './types'

export const IconInvoice: Icon = ({
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
      data-slot='icon-ui-invoice'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M15.04 8.67c-.27-.83-1.52-1.47-3-1.47-1.47 0-3.08.55-3.08 2.22 0 3.62 6.08.84 6.08 4.2 0 1.54-1.49 2.12-3 2.12-1.5 0-2.6-.64-3.08-1.5'
        stroke='currentColor'
      />
      <path d='M11.98 17.04V15.9' stroke='currentColor' />
      <path d='M11.98 7.01V5.9' stroke='currentColor' />
      <path
        opacity='.2'
        d='M17.24 21.29c1.38.93 2.06 1.4 2.6 1.11.53-.28.53-1.11.53-2.77V7.8c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H9.63c-2.83 0-4.24 0-5.12.88s-.88 2.29-.88 5.12v11.82c0 1.65 0 2.47.52 2.75l.03.02c.53.27 1.21-.2 2.57-1.14.48-.33.72-.5 1-.52h.02c.28 0 .53.13 1.05.41l2.21 1.21c.48.26.71.39.97.38.26 0 .5-.13.96-.39l2.14-1.18c.52-.3.78-.44 1.07-.43.28.02.53.18 1.02.52z'
        fill='currentColor'
      />
      <path
        d='m14.4 21.1-.37.22c-.99.59-1.48.88-2.03.88s-1.04-.28-2.04-.87l-.43-.25c-.4-.24-.6-.35-.8-.4a1.5 1.5 0 0 0-.8.01c-.2.06-.4.19-.79.44-1.03.67-1.55 1-1.97 1.01a1.5 1.5 0 0 1-1.31-.7c-.23-.37-.23-.99-.23-2.22V9.8c0-3.77 0-5.66 1.17-6.83C5.98 1.8 7.86 1.8 11.63 1.8h.74c3.77 0 5.65 0 6.83 1.17s1.17 3.06 1.17 6.83v9.4c0 1.27 0 1.9-.24 2.27a1.5 1.5 0 0 1-1.26.7c-.44 0-.98-.35-2.04-1.04-.4-.25-.6-.38-.82-.44a1.5 1.5 0 0 0-.77-.02c-.21.06-.42.18-.83.42'
        stroke='currentColor'
      />
    </svg>
  )
}
