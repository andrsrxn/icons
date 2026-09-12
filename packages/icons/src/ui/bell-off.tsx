import type { Icon } from './types'

export const IconBellOff: Icon = ({
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
      data-slot='icon-ui-bell-off'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m20.62 14.6.17.2a2 2 0 0 1 .4 1.34c0 .35 0 .52-.03.67a2 2 0 0 1-1.68 1.68c-.15.02-.32.02-.67.02H5.18c-.34 0-.5 0-.65-.02a2 2 0 0 1-1.7-1.7c-.02-.13-.02-.3-.02-.64v-.27a2 2 0 0 1 .59-1.28l1.2-1.39.01-.01v-3.01A7.4 7.4 0 0 1 12 2.8c4.1 0 7.44 3.33 7.44 7.44v2.97z'
        fill='currentColor'
      />
      <path
        d='m20.62 14.6.17.2a2 2 0 0 1 .4 1.34c0 .35 0 .52-.03.67a2 2 0 0 1-1.68 1.68c-.15.02-.32.02-.67.02H5.18c-.34 0-.5 0-.65-.02a2 2 0 0 1-1.7-1.7c-.02-.13-.02-.3-.02-.64v-.27a2 2 0 0 1 .59-1.28l1.2-1.39.01-.01v-3.01A7.4 7.4 0 0 1 12 2.8c4.1 0 7.44 3.33 7.44 7.44v2.97z'
        stroke='currentColor'
      />
      <path d='M8.06 18.51c0 1.58 1.77 2.86 3.94 2.86s3.94-1.28 3.94-2.86' stroke='currentColor' />
      <path d='m2.68 2.68 18.64 18.64' stroke='currentColor' />
    </svg>
  )
}
