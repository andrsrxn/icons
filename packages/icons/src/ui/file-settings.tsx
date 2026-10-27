import type { Icon } from './types'

export const IconFileSettings: Icon = ({
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
      data-slot='icon-ui-file-settings'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M7.7 22.25c-1.89 0-2.83 0-3.41-.58-.59-.59-.59-1.53-.59-3.42V5.78c0-1.87 0-2.8.58-3.38s1.51-.6 3.38-.62l2.23-.02c1.31-.01 1.97-.02 2.45.27a2 2 0 0 1 .68.67c.3.48.3 1.14.3 2.45 0 1.3 0 1.94.29 2.42q.25.42.67.67c.48.3 1.13.3 2.42.3 1.3 0 1.95 0 2.43.28q.42.26.67.68c.3.47.3 1.12.3 2.42v3.47l-1.88.71-.9.35c-.38.15-.57.22-.73.32a2 2 0 0 0-.83 1.05c-.06.18-.09.38-.15.78l-.01.1-.03.22a2 2 0 0 0 .24 1.14l.29.59c.25.54.15 1.18-.26 1.6z'
        fill='currentColor'
      />
      <path
        d='M20.1 11.54v-1.28c0-1.24 0-1.87-.24-2.43s-.69-1-1.58-1.86L17.1 4.82l-1.24-1.24c-.87-.87-1.3-1.3-1.85-1.53s-1.17-.23-2.4-.23H9.7c-2.83 0-4.24 0-5.12.88S3.7 5 3.7 7.82v8.43c0 2.83 0 4.25.88 5.12s2.3.88 5.12.88h1.84'
        stroke='currentColor'
      />
      <path d='M13.12 2.34V4.8c0 1.89 0 2.83.58 3.42s1.53.58 3.41.58h2.47' stroke='currentColor' />
      <circle
        cx='17.98'
        cy='18.67'
        r='2.86'
        transform='rotate(-90 17.98 18.67)'
        stroke='currentColor'
      />
      <path d='m16.47 21.34-.7 1.13' stroke='currentColor' />
      <path d='m16.34 15.82-.54-.97' stroke='currentColor' />
      <path d='m19.6 21.56.55.96' stroke='currentColor' />
      <path d='m19.45 16.08.75-1.2' stroke='currentColor' />
      <path d='m20.86 18.67 1.52-.01' stroke='currentColor' />
      <path d='M13.59 18.68h1.35' stroke='currentColor' />
    </svg>
  )
}
