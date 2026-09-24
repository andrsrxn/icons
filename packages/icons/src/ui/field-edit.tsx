import type { Icon } from './types'

export const IconFieldEdit: Icon = ({
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
      data-slot='icon-ui-field-edit'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20.7 6.62c.89 0 1.6.72 1.6 1.6v5.16c0 1.88 0 2.82-.58 3.41-.59.59-1.53.59-3.41.59H5.69c-1.88 0-2.82 0-3.41-.59s-.59-1.53-.59-3.41v-2.76c0-1.88 0-2.82.59-3.41s1.53-.59 3.41-.59h9l-3.91 3.6-.87 4.19 4.23-1.5z'
        fill='currentColor'
      />
      <path
        d='M19.58 6.83c1.5 0 2.73 1.22 2.73 2.73v2.54c0 2.13 0 3.2-.52 3.96a3 3 0 0 1-.8.8c-.76.52-1.83.52-3.96.52H7.07c-2.23 0-3.34 0-4.12-.57a3 3 0 0 1-.7-.69c-.56-.78-.56-1.9-.56-4.12s0-3.34.57-4.12a3 3 0 0 1 .69-.7c.78-.56 1.9-.56 4.12-.56h6.69'
        stroke='currentColor'
      />
      <rect
        opacity='.2'
        width='3.46'
        height='3.88'
        rx='1'
        transform='scale(1 -1)rotate(45 18.03 20.13)'
        fill='currentColor'
      />
      <path d='m19.68 6.85-2.61-2.6' stroke='currentColor' />
      <path
        d='M12.05 13.74c.56-.12.85-.18 1.1-.32.25-.13.45-.34.87-.74l7.13-7c.68-.67 1.02-1 1.02-1.42s-.34-.75-1-1.43l-.23-.22c-.66-.66-1-1-1.4-1-.42 0-.76.34-1.42 1l-7.1 7.07c-.4.4-.61.61-.75.86-.14.26-.2.54-.33 1.11L9.7 12.8c-.15.68-.22 1.02-.03 1.22.2.19.53.12 1.22-.03z'
        stroke='currentColor'
      />
    </svg>
  )
}
