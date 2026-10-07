import type { Icon } from './types'

export const IconAperture: Icon = ({
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
      data-slot='icon-ui-aperture'
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
        d='M1.78 12a10.22 10.22 0 1 0 20.44 0 10.22 10.22 0 0 0-20.44 0M12 16.05a4.05 4.05 0 1 1 0-8.1 4.05 4.05 0 0 1 0 8.1'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='10.22' transform='rotate(90 12 12)' stroke='currentColor' />
      <circle cx='12' cy='12' r='4.05' transform='rotate(90 12 12)' stroke='currentColor' />
      <path d='m10.74 7.74 10.63 1.18' stroke='currentColor' />
      <path d='m2.56 15.13 10.97 1.15' stroke='currentColor' />
      <path d='m7.23 11.37 7.37-9.14' stroke='currentColor' />
      <path d='m8.82 21.55 7.9-8.5' stroke='currentColor' />
      <path d='M8.95 15.25 4.45 5.23' stroke='currentColor' />
      <path d='m19.58 18.43-4.83-10.2' stroke='currentColor' />
    </svg>
  )
}
