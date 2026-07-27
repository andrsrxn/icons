import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTYuNTQgMTMuNzljLTEuODMtLjc5OC0yLjc0Ni0xLjE5OC0yLjc0MS0xLjg1Ny4wMDQtLjY2LjkyNS0xLjA0NyAyLjc2Ny0xLjgybDQuNjYtMS45NTVjLjM4Mi0uMTYuNTczLS4yNC43NzQtLjI0LjIwMSAwIC4zOTIuMDguNzc0LjI0bDQuNjYgMS45NTZjMS44NDIuNzcyIDIuNzYzIDEuMTU5IDIuNzY3IDEuODE5LjAwNS42Ni0uOTEgMS4wNTktMi43NDEgMS44NThsLTQuNjYgMi4wMzNjLS4zOTQuMTcyLS41OTEuMjU4LS44LjI1OC0uMjA5IDAtLjQwNi0uMDg2LS44LS4yNThsLTQuNjYtMi4wMzNaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0ibTExLjI0NiA4LjE1LTQuNzkgMi4wMWMtMS43OTUuNzUzLTIuNjkyIDEuMTMtMi42OTcgMS43NzItLjAwNC42NDMuODg3IDEuMDMyIDIuNjcxIDEuODFsLjY0NS4yODIgNC4xNDYgMS44MWMuMzg0LjE2Ny41NzYuMjUuNzc5LjI1LjIwMyAwIC4zOTUtLjA4My43OC0uMjVsNC4xNDUtMS44MS42NDUtLjI4MWMxLjc4NC0uNzc5IDIuNjc1LTEuMTY4IDIuNjctMS44MS0uMDA0LS42NDMtLjktMS4wMi0yLjY5NS0xLjc3M2wtNC43OTEtMi4wMWMtLjM3Mi0uMTU3LS41NTgtLjIzNS0uNzU0LS4yMzUtLjE5NiAwLS4zODIuMDc4LS43NTQuMjM1WiIvPjwvc3ZnPg==)
 */
export const IconLayer: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-layer'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M6.54 13.79c-1.83-.798-2.746-1.198-2.741-1.857.004-.66.925-1.047 2.767-1.82l4.66-1.955c.382-.16.573-.24.774-.24.201 0 .392.08.774.24l4.66 1.956c1.842.772 2.763 1.159 2.767 1.819.005.66-.91 1.059-2.741 1.858l-4.66 2.033c-.394.172-.591.258-.8.258-.209 0-.406-.086-.8-.258l-4.66-2.033Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m11.246 8.15-4.79 2.01c-1.795.753-2.692 1.13-2.697 1.772-.004.643.887 1.032 2.671 1.81l.645.282 4.146 1.81c.384.167.576.25.779.25.203 0 .395-.083.78-.25l4.145-1.81.645-.281c1.784-.779 2.675-1.168 2.67-1.81-.004-.643-.9-1.02-2.695-1.773l-4.791-2.01c-.372-.157-.558-.235-.754-.235-.196 0-.382.078-.754.235Z'
      />
    </svg>
  )
}
