import type { Icon } from './types'

export const IconSpider: Icon = ({
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
      data-slot='icon-ui-spider'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M11.84 7.88c-3.05 0-4.2 3.94-4.52 5.6 0 0 .48 5.76 4.51 5.76 4.54 0 5.05-5.46 5.05-5.46-.12-.79-1.03-5.9-5.04-5.9'
        fill='currentColor'
      />
      <path
        d='M7.2 13.62c0 3.17 3.14 5.74 4.8 5.74 1.67 0 4.8-2.57 4.8-5.74S14.65 7.88 12 7.88c-1.34 0-2.56.66-3.43 1.73a6.4 6.4 0 0 0-1.37 4.01'
        stroke='currentColor'
      />
      <path
        d='M10.24 8.24c-.43-.42-.7-.98-.7-1.61 0-1.27 1.1-2.3 2.46-2.3s2.47 1.03 2.47 2.3c0 .63-.27 1.2-.7 1.6'
        stroke='currentColor'
      />
      <path
        d='m6.07 2.5-.55 1.35c-.59 1.44-.88 2.16-.68 2.84S5.7 7.8 6.98 8.68l1.2.81'
        stroke='currentColor'
      />
      <path
        d='m1.97 7.93.37 1.23c.4 1.3.6 1.94 1.1 2.33.49.39 1.16.42 2.52.5l1.36.06'
        stroke='currentColor'
      />
      <path
        d='m3.14 17.93.44-.93c.5-1.06.76-1.6 1.22-1.9.46-.31 1.05-.34 2.22-.39h.3'
        stroke='currentColor'
      />
      <path
        d='m7.02 21.62-.1-.32c-.26-1.03-.4-1.54-.3-2a2 2 0 0 1 .3-.72c.27-.4.74-.65 1.67-1.16'
        stroke='currentColor'
      />
      <path
        d='m17 21.62.08-.32c.27-1.03.4-1.54.3-2a2 2 0 0 0-.3-.72c-.27-.4-.73-.65-1.66-1.16'
        stroke='currentColor'
      />
      <path
        d='m22.04 7.93-.37 1.23c-.4 1.3-.6 1.94-1.1 2.33s-1.17.42-2.52.5l-1.36.06'
        stroke='currentColor'
      />
      <path
        d='m20.88 17.93-.38-.85c-.49-1.1-.73-1.65-1.2-1.98-.47-.32-1.08-.34-2.28-.4h-.21'
        stroke='currentColor'
      />
      <path
        d='m17.9 2.5.56 1.39c.57 1.42.86 2.13.66 2.8-.2.68-.84 1.11-2.1 1.98l-1.2.82'
        stroke='currentColor'
      />
      <path d='M13.6 2.84v1.8' stroke='currentColor' />
      <path d='M10.4 2.84v1.8' stroke='currentColor' />
    </svg>
  )
}
