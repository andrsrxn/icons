import type { Icon } from './types'

export const IconCookie: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='cookie'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M12 20.363a8.365 8.365 0 0 0 8.282-7.195.312.312 0 0 0-.204-.329 3.4 3.4 0 0 1-2.02-4.21.362.362 0 0 0-.287-.464c-2.123-.285-3.97-2.045-4.48-4.228a.304.304 0 0 0-.254-.237A8.363 8.363 0 1 0 12 20.363Zm-3.639-8.456c.807.575 2.077.175 2.838-.893.76-1.068.723-2.4-.084-2.974-.806-.574-2.076-.174-2.837.894-.76 1.068-.723 2.399.083 2.973ZM15 15.661a1.34 1.34 0 1 1-2.679 0 1.34 1.34 0 0 1 2.679 0Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        fill='currentColor'
        d='M8.867 15.405a.405.405 0 1 1-.81 0 .405.405 0 0 1 .81 0Zm6.326-4a.405.405 0 1 1-.809 0 .405.405 0 0 1 .81 0Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M11.199 11.014c-.761 1.068-2.031 1.468-2.838.893-.806-.574-.844-1.905-.083-2.973.76-1.068 2.03-1.468 2.837-.894.807.574.844 1.906.084 2.974ZM15 15.66a1.34 1.34 0 1 1-2.679 0 1.34 1.34 0 0 1 2.679 0Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 20.363a8.365 8.365 0 0 0 8.282-7.195.312.312 0 0 0-.204-.329 3.4 3.4 0 0 1-2.02-4.21.362.362 0 0 0-.287-.464c-2.123-.285-3.97-2.045-4.48-4.228a.304.304 0 0 0-.254-.237A8.363 8.363 0 1 0 12 20.363Z'
        clipRule='evenodd'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8.867 15.405a.405.405 0 1 1-.81 0 .405.405 0 0 1 .81 0Zm6.326-4a.405.405 0 1 1-.809 0 .405.405 0 0 1 .81 0Z'
      />
    </svg>
  )
}
