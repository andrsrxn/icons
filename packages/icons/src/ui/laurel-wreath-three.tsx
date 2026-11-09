import type { Icon } from './types'

export const IconLaurelWreathThree: Icon = ({
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
      data-slot='icon-ui-laurel-wreath-three'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <ellipse
        opacity='.2'
        cx='7.82'
        cy='5.37'
        rx='2.71'
        ry='1.57'
        transform='rotate(92.04 7.82 5.37)'
        fill='currentColor'
      />
      <ellipse
        opacity='.2'
        cx='2.71'
        cy='1.57'
        rx='2.71'
        ry='1.57'
        transform='scale(1 -1)rotate(-87.66 5.8 -8.9)'
        fill='currentColor'
      />
      <ellipse
        opacity='.2'
        cx='7.43'
        cy='18.51'
        rx='2.71'
        ry='1.57'
        transform='rotate(152.04 7.43 18.5)'
        fill='currentColor'
      />
      <ellipse
        opacity='.2'
        cx='2.71'
        cy='1.57'
        rx='2.71'
        ry='1.57'
        transform='scale(1 -1)rotate(-27.66 -31.14 -36.7)'
        fill='currentColor'
      />
      <ellipse
        opacity='.2'
        cx='4.47'
        cy='12.1'
        rx='2.71'
        ry='1.57'
        transform='rotate(-162.96 4.47 12.1)'
        fill='currentColor'
      />
      <ellipse
        opacity='.2'
        cx='2.71'
        cy='1.57'
        rx='2.71'
        ry='1.57'
        transform='scale(1 -1)rotate(17.34 55.92 49.87)'
        fill='currentColor'
      />
      <path
        d='M6.25 5.51c-.04.95.48 1.8.9 2.35.22.28.33.43.57.43.23.01.35-.12.59-.39a3.8 3.8 0 0 0 1.07-2.28 3.8 3.8 0 0 0-.9-2.34c-.23-.29-.34-.43-.57-.44-.23 0-.35.13-.6.4A3.8 3.8 0 0 0 6.26 5.5'
        stroke='currentColor'
      />
      <path
        d='M17.72 5.52c.04.94-.47 1.8-.9 2.35-.21.28-.32.43-.56.44-.23 0-.35-.13-.6-.4a3.8 3.8 0 0 1-1.07-2.26c-.04-.95.46-1.8.89-2.36.22-.28.33-.42.56-.43s.35.12.6.38a3.8 3.8 0 0 1 1.08 2.28'
        stroke='currentColor'
      />
      <path
        d='M6.52 17.22a3.8 3.8 0 0 0-1.58 1.95c-.13.34-.2.5-.1.7.12.21.3.25.64.33.68.14 1.68.23 2.51-.21a3.8 3.8 0 0 0 1.58-1.96c.14-.34.2-.5.1-.7-.11-.21-.29-.25-.64-.33a3.8 3.8 0 0 0-2.51.22'
        stroke='currentColor'
      />
      <path
        d='M17.5 17.22c.84.44 1.34 1.3 1.6 1.95.13.33.2.5.1.7-.11.21-.29.25-.64.33-.68.15-1.67.24-2.5-.2a3.8 3.8 0 0 1-1.6-1.95c-.14-.33-.2-.5-.1-.7.11-.21.29-.25.64-.33a3.8 3.8 0 0 1 2.5.2'
        stroke='currentColor'
      />
      <path
        d='M4.74 10.55c-.9-.28-1.86 0-2.5.26-.33.14-.5.21-.57.44-.06.22.03.37.23.67a3.8 3.8 0 0 0 1.92 1.63c.9.27 1.87 0 2.5-.27.34-.14.5-.21.57-.43.07-.23-.03-.38-.23-.68a3.8 3.8 0 0 0-1.92-1.62'
        stroke='currentColor'
      />
      <path
        d='M19.25 10.54c.9-.28 1.87-.01 2.5.26.34.13.5.2.57.43s-.03.37-.22.67a3.8 3.8 0 0 1-1.91 1.64c-.9.28-1.87.01-2.5-.26-.34-.14-.5-.2-.57-.43s.02-.37.22-.67a3.8 3.8 0 0 1 1.91-1.64'
        stroke='currentColor'
      />
      <path
        d='M9.65 17.16c-.97-.56-1.96-1.89-2.44-3.97-.47-2.07-.12-3.7.46-4.64'
        stroke='currentColor'
      />
      <path
        d='M14.39 17.18c.95-.56 1.94-1.9 2.4-3.98.47-2.09.12-3.71-.46-4.65'
        stroke='currentColor'
      />
      <path
        d='M10.76 13.93c.58.96 2.7 1.02 2.7-.78 0-.91-.7-1.17-1.46-1.2.67 0 1.3-.33 1.3-1.18 0-1.7-2-1.64-2.54-.74'
        stroke='currentColor'
      />
    </svg>
  )
}
