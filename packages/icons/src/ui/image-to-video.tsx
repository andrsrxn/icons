import type { Icon } from './types'

export const IconImageToVideo: Icon = ({
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
      data-slot='icon-ui-image-to-video'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M16.35 7.23c0-2.36 0-3.53-.62-4.34a3 3 0 0 0-.54-.55c-.81-.62-2-.62-4.35-.62H6.37c-1.66 0-2.49 0-3.13.32a3 3 0 0 0-1.33 1.33c-.32.64-.32 1.47-.32 3.13 0 1.47 0 2.2.27 2.5a1 1 0 0 0 .92.3c.39-.08.82-.67 1.7-1.86l.25-.35c.56-.77.84-1.15 1.2-1.24a1 1 0 0 1 .5.01c.36.1.63.5 1.15 1.3l1.05 1.6c.51.77.77 1.16 1.15 1.26l.2.02c.39.02.74-.29 1.45-.9l.21-.18c.37-.3.55-.46.75-.53a1 1 0 0 1 .6.01c.2.07.38.23.73.55.81.73 1.22 1.1 1.56 1.12a1 1 0 0 0 .86-.38c.21-.27.21-.82.21-1.9z'
        fill='currentColor'
      />
      <rect x='1.59' y='1.72' width='14.76' height='11.85' rx='3' stroke='currentColor' />
      <path
        d='M13.25 4.8a.56.56 0 1 1-1.13 0 .56.56 0 0 1 1.13 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='m1.8 11.17 3.28-4.66c.55-.8.83-1.19 1.21-1.18s.63.42 1.14 1.25L8.9 8.94c.44.72.66 1.08 1.01 1.11s.9-.58 1.47-1.2c.47-.5.85-.87 1.15-.88.3 0 .54.23 1.02.7l2.54 2.5'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.33 22.4c2.83 0 4.24 0 5.12-.87.88-.88.88-2.3.88-5.12v-4.28a3 3 0 0 0-2.78-2.77l-.5-.01h-.8a2.35 2.35 0 0 0-1.2 4.36l1.66 1a1.24 1.24 0 0 1 .1 2.05l-3.48 2.58a1.53 1.53 0 0 1-2.44-1.24v-2.84a1.8 1.8 0 0 0-3.62 0v2.67c0 1.38 0 2.06.22 2.6a3 3 0 0 0 1.65 1.66c.54.22 1.23.22 2.6.22z'
        fill='currentColor'
      />
      <path
        d='M16.45 9.35c2.71 0 4.07 0 4.93.81l.14.13c.81.87.81 2.23.81 4.94v1.18c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88h-1.06c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12v-2.7'
        stroke='currentColor'
      />
      <path
        d='M12.86 13.54v2.54c0 2 0 3 .54 3.45q.23.18.52.27c.67.2 1.5-.34 3.17-1.45l.1-.06c1.5-1 2.25-1.5 2.34-2.18a2 2 0 0 0-.01-.42c-.11-.68-.88-1.15-2.42-2.1l-.26-.15-1.29-.78'
        stroke='currentColor'
      />
    </svg>
  )
}
