import type { Icon } from './types'

export const IconStore: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      data-slot='store'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M4.47 13.09c0-.85.78-1.48 1.61-1.3.37.07.75 0 1.06-.23l.43-.3c.28-.2.41-.3.55-.37a2 2 0 0 1 1.66-.07c.15.06.3.15.58.33l.19.11c.42.26.63.39.86.46a2 2 0 0 0 1.2.01c.22-.07.43-.19.86-.44l.35-.2c.26-.15.39-.23.51-.28a2 2 0 0 1 1.72.1c.12.06.24.15.48.33l.45.33c.29.22.66.3 1 .21.78-.17 1.51.42 1.51 1.2v4.5c0 .57 0 .85-.05 1.09a2 2 0 0 1-1.47 1.46c-.23.06-.52.06-1.09.06h-.1c-.47 0-.71 0-.91-.04a2 2 0 0 1-1.56-1.56c-.04-.2-.04-.43-.04-.91v-.25l-.01-.47a2 2 0 0 0-1.8-1.78l-.46-.01c-.43 0-.65 0-.83.03a2 2 0 0 0-1.6 1.6c-.03.18-.03.4-.03.86 0 .49 0 .73-.04.93a2 2 0 0 1-1.56 1.56c-.2.04-.44.04-.93.04s-.75 0-.96-.04a2 2 0 0 1-1.54-1.54c-.04-.2-.04-.46-.04-.95z'
        fill='currentColor'
      />
      <path
        d='M5.75 12c-1.83 0-2.27-.86-2.27-1.87 0-.65.58-2.82 1-4.3a2 2 0 0 1 1.9-1.42h11.24a2 2 0 0 1 1.92 1.46c.4 1.5.98 3.72.98 4.27 0 .84-.74 1.85-2.26 1.85-1.94 0-3.06-1.88-3.06-1.88S13.79 12 11.96 12s-3.13-1.86-3.13-1.86S7.58 12 5.75 12Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
      <path
        d='M4.47 12.07v4.02c0 1.89 0 2.83.58 3.42.59.58 1.53.58 3.42.58h7.02c1.89 0 2.83 0 3.42-.58.58-.59.58-1.53.58-3.42v-4.02'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M14.64 20.17v-2.66c0-.61 0-.92-.06-1.17a2 2 0 0 0-1.42-1.42c-.26-.07-.56-.07-1.18-.07s-.92 0-1.17.07a2 2 0 0 0-1.42 1.42c-.07.25-.07.56-.07 1.17v2.66'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
