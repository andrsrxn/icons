import type { Icon } from './types'

export const IconPrism: Icon = ({
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
      data-slot='icon-ui-prism'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M13.09 21.6c-.53.35-.8.52-1.09.52s-.56-.17-1.09-.51l-2.95-1.92c-2.3-1.5-3.46-2.24-3.25-2.96s1.59-.71 4.34-.71h5.9c2.75 0 4.13 0 4.34.71.21.72-.94 1.47-3.25 2.96z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M13.09 7.24c-.53.34-.8.51-1.09.51s-.56-.17-1.09-.51L7.96 5.32C5.66 3.82 4.5 3.08 4.7 2.36s1.59-.72 4.34-.72h5.9c2.75 0 4.13 0 4.34.72s-.94 1.47-3.25 2.96z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M4.57 2.85v13.81' stroke='currentColor' />
      <path d='M19.43 2.95v13.81' stroke='currentColor' />
      <path d='M12 8.5v13.82' stroke='currentColor' />
      <path
        d='m16.31 19.67-3.19 2.16c-.54.37-.81.56-1.12.56-.3 0-.58-.19-1.12-.55l-3.2-2.17c-2.2-1.5-3.3-2.24-3.09-2.95.22-.7 1.55-.7 4.22-.7h6.38c2.67 0 4 0 4.22.7s-.89 1.46-3.1 2.95'
        stroke='currentColor'
      />
      <path
        d='m16.31 5.3-3.19 2.16c-.54.37-.81.56-1.12.56-.3 0-.58-.19-1.12-.56L7.68 5.3c-2.2-1.5-3.3-2.24-3.09-2.95.22-.7 1.55-.7 4.22-.7h6.38c2.67 0 4 0 4.22.7s-.89 1.46-3.1 2.95'
        stroke='currentColor'
      />
    </svg>
  )
}
