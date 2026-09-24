import type { Icon } from './types'

export const IconUnfoldVertical: Icon = ({
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
      data-slot='icon-ui-unfold-vertical'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M12 15.85v5.97' stroke='currentColor' />
      <path
        d='m8.8 19.88.37.38c1.33 1.33 2 2 2.83 2s1.5-.67 2.83-2l.38-.38'
        stroke='currentColor'
      />
      <path d='M12 8.2V2.23' stroke='currentColor' />
      <path d='m8.8 4.17.37-.38c1.33-1.33 2-2 2.83-2s1.5.66 2.83 2l.38.38' stroke='currentColor' />
      <path d='M4.44 11.94H1.68' stroke='currentColor' />
      <path d='M10.4 11.94H7.64' stroke='currentColor' />
      <path d='M16.4 11.94h-2.75' stroke='currentColor' />
      <path d='M22.33 11.94h-2.76' stroke='currentColor' />
    </svg>
  )
}
