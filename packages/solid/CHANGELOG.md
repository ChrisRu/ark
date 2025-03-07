---
id: changelog
title: Changelog
description: All notable changes will be documented in this file.
---

## [Unreleased]

### Fixed

- **Field**: Resolved an issue where the `data-disabled` attribute wasn't set on the field helper text when the field is disabled.

## [4.10.1] - 2025-01-23

### Fixed

- **FileUpload**: Resolved an issue where multiple files were added during a single upload
  operation.

## [4.10.0] - 2025-01-22

### Added

- **DatePicker**:
  - Added `minView` and `maxView` options for better control over the displayed views, allowing to
    create Month and Year pickers.
  - Introduced a new `parse` method to convert input values into valid dates, complementing the
    `format` option for enhanced UX
  - Added `locale` and `timeZone` options to the `format` method
  - Introduced `placeholder` context property to customize the input's placeholder text

### Fixed

- **ColorPicker, HoverCard, Tooltip**:
  - Fixed intermittent placement shifts caused by updates to the `data-placement` attribute
- **FileUpload**:
  - Resolved an issue where the change event wasn’t triggered when files were dropped into the
    dropzone
  - Fixed an issue where `context.setClipboardFiles(...)` was called despite file upload being
    disabled
  - Addressed an issue where the machine transitioned to the `dragging` state even when disabled
  - Fixed an issue preventing rejected files from being deleted via the item delete trigger
  - Exposed the disabled state via `context.disabled`
- **Tour**:
  - Fixed an issue where the dialog tour step did not synchronize its z-index with the content
- **Date Picker**:
  - Fixed a crash that occurred when entering very large invalid dates in the input field
  - Fixed an issue in the year view where selecting a year was not possible when the `min` and `max`
    dates were less than one year apart and overlapped two distinct years

## [4.9.0] - 2025-01-14

### Added

- **[NEW] Tour**: Introduced the `Tour` component to guide users through the interface. For more
  details, check the [Tour documentation](https://ark-ui.com/docs/solid/components/tour).
- **[NEW] FocusTrap**: Implemented the `FocusTrap` component to confine focus within a specified
  container.

### Fixed

- Resolved an issue where form-related components reset despite the reset event being cancelled.
- **HoverCard, Tooltip**: Resolved an issue where the controlled open state could become
  inconsistent during the `opening` or `closing` phases.
- **FileUpload**:
  - Fixed a brief warning display when a new image file is added to the preview.
  - Enhanced click detection for the dropzone and added support for the `disableClick` prop.

## [4.8.0] - 2025-01-08

### Added

- **Clipboard**: Introduced `Clipboard.ValueText` to display clipboard content.
- **FileUpload**:
  - Added `preventDropOnDocument` to block file drops on the document when the file upload component
    is active.
  - Added `setClipboardFiles` to the API for setting files from clipboard data.
- **Progress**: Added support for `onValueChange` and `defaultValue`.
- **Tabs, Menu, Combobox**: Added `navigate` property for custom router navigation when selections
  render as links.
- **QrCode**:
  - Added support for `onValueChange` and `defaultValue`.
  - Added `QrCode.DownloadTrigger` to enable QR code image downloads.

### Fixed

- **Collapsible**: Fixed a bug where the opening animation replayed when an open collapsible was
  re-rendered.
- **Dialog, Popover**: Resolved an issue causing dialogs or popovers to close if the focused element
  was removed from the DOM.
- **FileUpload**: Fixed a bug causing the hidden input to desync from accepted files.
- **Menu, Popover**: Fixed inconsistent interaction detection outside the component when the trigger
  was inside a scrollable container.
- **Pagination**: Corrected an issue where the page range returned an incorrect `end` value when
  `pageSize` exceeded `count`.
- **QRCode**: Fixed `getDataUrl` to generate a properly sized QR code.

## [4.7.0] - 2024-12-29

### Added

- **Carousel [Breaking]:** Redesigned the carousel for better touch handling and performance. See
  the [Carousel docs](https://ark-ui.com/docs/solid/components/carousel) for more info.

### Fixed

- **FileUpload:** Resolved an issue where the `accept` attribute wasn’t applied to the hidden input.
- **NumberInput:** Fixed a bug where the input event wasn’t triggered on the first click of the
  increment/decrement controls.

## [4.6.0] - 2024-12-12

### Added

- **ColorPicker**: Introduced `invalid` and `openAutoFocus` props.
- **TreeView**: Exported the `TreeCollection` type.
- **FileUpload**: Added `acceptedFiles` and `rejectedFiles` outputs to the `validate` method.

### Changed

- **Environment**: Deprecated `EnvironmentContext` in favor of `UseEnvironmentContext`.

### Fixed

- **Presence, Collapsible**: Fixed a potential memory leak after component unmount.
- **Environment**: Correctly exported `EnvironmentContext`.
- **SignaturePad**: Resolved an issue where `getDataUrl(...)` rendered improperly scaled images in
  Firefox.
- **NumberInput**: Fixed an issue where the locale provided by `LocaleProvider` was not applied
  correctly.

### Removed

- **DatePicker**: Dropped the unimplemented `modal` prop.

## [4.5.1] - 2024-11-18

### Fixed

- **TreeView**: Exported missing `TreeViewContext`.

## [4.5.0] - 2024-11-11

### Added

- **Utility**: Exported `createAnatomy` for defining custom component anatomy, now accessible via
  `import { createAnatomy } from '@ark-ui/solid/anatomy'`.

### Fixed

- **ColorPicker**
  - Added `--color` CSS variable to swatch and swatch trigger parts.
  - Enabled clicking on swatch when in the open state.
- **Combobox**: Fixed a timing issue with the `onValueChange` callback.
- **Clipboard**: Corrected missing `type="button"` attribute on clipboard trigger.
- **Field**
  - Fixed cleanup issue with `resizeObserver` on `Field.Textarea`.
  - Triggered resize when `rows` attribute or fonts change.
- **TagsInput**: Resolved inconsistent delete behavior across states.
- **TimePicker**: Exported missing `timePickerAnatomy`.

## [4.4.0] - 2024-11-08

### Added

- **Field**: Added `autoresize` prop to `Field.Textarea` for auto-resizing the textarea based on
  content.

### Changed

- **TreeView**: Redesigned using the new tree collection for improved rendering and logic
  management. See the [TreeView documentation](https://ark-ui.com/docs/solid/components/tree-view)
  for details.
- **QrCode, SignaturePad, Timer**: Promoted from preview to stable release.

### Fixed

- **Dialog**: Fixed an issue where body styles weren't properly restored when `preventScroll` was
  enabled.
- **Toast**: Corrected type definitions in the `createToaster` function.
- **FileUpload**: Fixed an issue where image previews weren't updating when files were changed.

## [4.3.0] - 2024-10-26

### Added

- **Slider**: Introduced `Slider.DraggingIndicator` for displaying an indicator when dragging a
  thumb.
- **Field**: Added `Field.RequiredIndicator` to show a required indicator (e.g., an asterisk) when
  the `required` prop is set.

```tsx
<Field.Root required>
  <Field.Label>
    Username
    <Field.RequiredIndicator />
  </Field.Label>
  <Field.Input placeholder="Enter your username" />
</Field.Root>
```

### Fixed

- **TagsInput**: Resolved an issue where `api.addTag(...)` was not functioning correctly.
- **RatingGroup**: Fixed a bug where both the rating group and rating item received focus when
  `readOnly` was set to `true`.
- **Combobox**: Corrected behavior where `getSelectionValue` was called multiple times; it now
  triggers only when a selection is made.
- **HoverCard**: Removed `preventDefault` calls on the `touchstart` event to avoid browser error
  logs.
- **Popover**: Fixed a race condition in iOS Safari where switching between popovers caused them to
  close unexpectedly.
- **Presence**: Addressed an issue where elements using the presence machine did not exit the
  unmounting state if closed with a delay while switching tabs.

### Changed

- **Editable**:
  - Added `data-autoresize` attribute to both editable and preview elements when `autoResize` is
    enabled.
  - Removed the default `all: unset` style from the input when `autoResize` is enabled, allowing for
    user-defined CSS.

## [4.2.1] - 2024-10-09

### Changed

- **Time Picker [Preview]**: Updated `value` and `defaultValue` types from `string` to `Time`. Use
  the exported `parseTime` function to convert between strings and time objects.

### Fixed

- **TagsInput**: Resolved an issue where tag navigation was unresponsive after removing tags with
  the delete key.
- **DatePicker**:
  - Fixed a bug where selecting a preset and then blurring the input incorrectly reset the value.
  - Fixed an issue where the `MonthSelect` sometimes defaulted to January.

## [4.2.0] - 2024-10-03

### Added

- Introduced support for importing components via dedicated entry points. For instance, the `Select`
  can now be imported directly from `@ark-ui/solid/select`.

### Fixed

- Fixed an issue where Field.Input was mistakenly read-only when rendered on the server.

## [4.1.0] - 2024-09-30

### Added

- **Toggle**: Introduced the `Toggle` component.
- **Dialog**: Added support for detecting outside clicks from parent windows when rendered within an
  iframe.

### Fixed

- **Combobox**: Fixed an issue where pressing Enter without selecting an option left text in the
  input.
- **Dialog**: Fixed an issue where the dialog closed when the positioner was scrollable, and the
  scrollbar was clicked.
- **File Upload**:
  - Fixed an issue where `acceptedFiles` were removed after an invalid file upload.
  - Fixed an issue in the preview image where `createObjectURL` was not cleaned up.

## [4.0.0] - 2024-09-25

In this major release, we shifted from primitive data types like strings to more structured types
such as Collection, Color, and DateValue. This enhanced flexibility and control by offering advanced
methods and properties.

The new APIs introduced helper functions like `parseColor`, `parseDate`, and `createListCollection`
to simplify working with the new types and make code more concise.

### Changed

- **ColorPicker [Breaking]**: Updated `value` and `defaultValue` types from `string` to `Color`. Use
  the exported `parseColor` function to convert between strings and color objects.

  **Before**

  ```tsx
  import { ColorPicker } from '@ark-ui/solid'

  const Demo = () => {
    return <ColorPicker.Root defaultValue="#000" />
  }
  ```

  **After**

  ```tsx
  import { ColorPicker, parseColor } from '@ark-ui/solid'

  const Demo = () => {
    return <ColorPicker.Root defaultValue={parseColor('#000')} />
  }
  ```

  > This change allows direct access to color object methods and properties.

- **Select, Combobox [Breaking]**: Removed the `items`, `itemToString`, and `itemToValue` props.
  Introduced a `collection` prop instead. Use the `createListCollection` helper to generate a
  collection from items.

  **Before**

  ```tsx
  import { Select } from '@ark-ui/solid'

  const Demo = () => {
    return <Select.Root items={['Option 1', 'Option 2', 'Option 3']} />
  }
  ```

  **After**

  ```tsx
  import { Select, createListCollection } from '@ark-ui/solid'

  const collection = createListCollection({
    items: ['Option 1', 'Option 2', 'Option 3'],
  })

  const Demo = () => {
    return <Select.Root collection={collection} />
  }
  ```

- **DatePicker [Breaking]**: Changed `value` and `defaultValue` types from `string` to `Date`. To
  convert between strings and dates, use the `parseDate` function.

  **Before**

  ```tsx
  import { DatePicker } from '@ark-ui/solid'

  const Demo = () => {
    return <DatePicker.Root defaultValue="2024-01-01" />
  }
  ```

  **After**

  ```tsx
  import { DatePicker, parseDate } from '@ark-ui/solid'

  const Demo = () => {
    return <DatePicker.Root defaultValue={parseDate('2024-01-01')} />
  }
  ```

## [3.13.0] - 2024-09-24

### Added

- **FileUpload**: Introduced a `ClearTrigger` for clearing file uploads.
- **Switch, Checkbox, Radio Group**: Added the `data-focus-visible` attribute for elements
  interacted with via keyboard.

### Fixed

- **FileUpload**: Resolved an issue where `directory: true` was non-functional.

### Changed

- **Tooltip**: Now only opens on keyboard focus, improving accessibility.

## [3.12.1] - 2024-09-19

### Fixed

- **DatePicker**

  - Fixed issue where the year select dropdown doesn't respect `min` and `max` props.
  - Fixed issue where date picker throws when `min` or `max` is changed.

## [3.12.0] - 2024-09-13

### Added

- **Frame (Preview)**: Introduced the `Frame` component for rendering content within an iframe.
- **Timer (Preview)**: Added `Area` and `Control` parts to improve structure and anatomy.

### Fixed

- **Combobox**: Resolved an issue where the highlighted item remained persistent when the list of
  items was empty.

## [3.11.0] - 2024-09-10

### Fixed

- **Floating Components**: Fixed issue where clicking outside of a dialog on mobile passed click
  events through.

- **Popover**: Fixed issue where popover did not restore focus when open state was changed
  programmatically

- **Avatar**: Fixed issue where avatar could throw when the fallback inner text changed

- **Steps**: Improved accessibility of tablist semantics by using `aria-owns`

### Added

- **FileUpload**: Add support for more file types in file upload `accept` intellisense

- **Toast**: Add support for `action` property when creating toasts, giving you the ability to add a
  `action.label` and `action.onClick`. The `onClick` function will be called when the user clicks
  the action trigger.

```ts
toaster.create({
  title: 'Uploaded successfully',
  type: 'success',
  action: {
    label: 'Undo',
    onClick: () => {
      console.log('undo')
    },
  },
})
```

- **File Upload**: Added support for `invalid` prop in file upload to explicitly mark upload
  operation as invalid. This could be paired with the `rejectedFiles` to show an error message.

### Changed

- **Floating Components**: Refactored `boundary` to only support function that returns an element.

- **Select**

  - Refactored opening and selection to be based on click events rather than pointerdown/up cycles.
  - Improved usability and accessibility of the select component.
  - Fixed issue where controlled multiple selects open state behaved unexpectedly.

## [3.10.0] - 2024-09-02

### Fixed

- **Steps**: Fixed issue where steps context was not exported

### Added

- **Checkbox**: Added `invalid` prop to `Checkbox.Group`

## [3.9.0] - 2024-08-22

### Added

- **Editable**

  - Add support for controlled the editable's state (edit/preview) using `edit` and `onEditChange`

- **Pagination**

  - Expose `api.count` property

### Changed

- **Editable**

  - Removed `onEdit` in favor of `onEditChange`
  - Removed `startsWithEditView` in favor of `edit` prop

### Fixed

- **Dialog**

  - Fix issue where closing a nested dialog focuses the first focusable element in the parent dialog
    instead of the previously focused element.

- **Steps**: Fixed issue where the steps component was not exported in the index file.

## [3.8.0] - 2024-08-19

### Added

- **Steps (Preview)**: Added `Steps` component.

```jsx
<Steps.Root count={1}>
  <Steps.List>
    <Steps.Item index={0}>
      <Steps.Trigger>
        <Steps.Indicator>1</Steps.Indicator>
        First
      </Steps.Trigger>
      <Steps.Separator />
    </Steps.Item>
  </Steps.List>

  <Steps.Content index={0}>Content</Steps.Content>
  <Steps.CompletedContent>Completed</Steps.CompletedContent>

  <Steps.PrevTrigger>Back</Steps.PrevTrigger>
  <Steps.NextTrigger>Next</Steps.NextTrigger>
</Steps.Root>
```

- **Timer (Preview)**: Added `Timer` component.

```jsx
<Timer.Root>
  <Timer.Item type="days" />
  <Timer.Separator>:</Timer.Separator>
  <Timer.Item type="hours" />
  <Timer.Separator>:</Timer.Separator>
  <Timer.Item type="minutes" />
  <Timer.Separator>:</Timer.Separator>
  <Timer.Item type="seconds" />
</Timer.Root>
```

## [3.7.0] - 2024-08-13

### Changed

- **Progress**: Update `Progress.ValueText` to render percentage as string.

### Fixed

- **Field**:

  - Fixed issue where id of field parts could not be customized, breaking Zag.js composition.
  - Added `data-*` attributes to control part to allow for better styling.

- **Select**: Fixed reactivity issues when `items` and `value` are updated.

## [3.6.2] - 2024-07-28

### Changed

- **DatePicker**: Added support for `index` in `getLabelProps`.

### Fixed

- **DatePicker**:
  - Fixed issue where the selected date doesn't reflect in the input when clicking the trigger and
    then focusing the input.
  - Fixed SSR issue when using `getPresetTrigger`.
- **Slider**: Fixed issue where `onValueChangeEnd` was called with an incorrect value.
- Fixed an import issue with `@internationalized/date`.

## [3.6.1] - 2024-07-26

### Changed

- **Highlight**: Exported `HighlightChunk` type to enhance type inference in userland code.

### Fixed

- **Select**: Fixed `HiddenSelect` to correctly emit values when a simple string array is used as
  the `value` for the `Select` component.

## [3.6.0] - 2024-07-25

### Added

- **Fieldset Component**: Introduced to help group form fields.

```jsx
<Fieldset.Root>
  <Fieldset.Legend>Legend</Fieldset.Legend>
  <Fieldset.HelperText>Helper text</Fieldset.HelperText>
  <Fieldset.ErrorText>Error text</Fieldset.ErrorText>
</Fieldset.Root>
```

Learn more in the [documentation](https://ark-ui.com/docs/solid/components/fieldset).

- **Highlight Component**: Added to highlight text based on a query.

```jsx
import { Highlight } from '@ark-ui/solid'

export const App = () => (
  <Highlight
    query={['Ark UI', 'exclusive examples']}
    text="Unlock exclusive examples and support the development by getting Ark Plus."
  />
)
```

- **Tooltip**: Added `closeOnClick` to control tooltip closure on trigger click.

### Changed

- **Toast**: Exported `CreateToasterReturn` type to improve type inference.
- **Combobox**: Enhanced accessibility by removing unnecessary `aria-selected` and `aria-disabled`
  attributes.

### Fixed

- **Toast**: Added missing `aria-labelledby` and `aria-describedby` attributes on the root element.
- **Combobox**: Fixed issue where the input didn't update on selection with a pointer.
- **RadioGroup**: Corrected misspelt `data-readonly` attribute.
- **Select**: Enabled customization of `closeOnSelect` when `multiple` is true.
- **Tags Input**:
  - Fixed issues with repeat pasting and undo.
  - Addressed problem where deleting a pasted value disabled further pasting.
  - Ensured values are always unique by discarding duplicates

## [3.5.0] - 2024-06-30

- **All Components**: Exported each component's anatomy. For example:

  ```jsx
  import { avatarAnatomy } from '@ark-ui/solid'
  ```

- **NumberInput**: Introduced the `ValueText` part to render the internal state value.

### Fixed

- **TreeView**: Resolved an issue preventing input usage within the tree.
- **Progress**: Fixed a warning in `Circle` due to an incorrect `viewBox` attribute on the `<svg>`
  element.
- **Carousel**: Corrected looping behavior for next and previous buttons when both `slidesPerView`
  and `loop` are set.
- **Menu**: Fixed loss of position data in the context menu upon closing.

## [3.4.1] - 2024-06-28

### Changed

- **Checkbox**: Added the `name` prop to `Checkbox.Group` for setting checkbox names within the
  group.

### Fixed

- **Combobox, Select**: Fixed an issue where it throws an error when `items` are reactive.

## [3.4.0] - 2024-06-25

### Added

- **Field**: Introduced the `Field` component for flexible form input, label, and helper text
  container.
- **All Components**: Exposed base props to simplify prop merging for library consumers, especially
  in CSS-in-JS environments.
  ```jsx
  export interface AccordionItemBaseProps extends ItemProps, PolymorphicProps<'div'> {}
  export interface AccordionItemProps extends HTMLProps<'div'>, AccordionItemBaseProps {}
  ```
- **ColorPicker**: Added `SliderValueText`, `SliderLabel`, and `ValueSwatch` parts for enhanced
  customization.
- **Tooltip**: Added `closeOnScroll` option to control whether the tooltip should close when the
  trigger's overflow parent scrolls.
- **Signature Pad**: Introduced `HiddenInput` to the `SignaturePad` component for better form
  library compatibility.

### Fixed

- **Menu**:
  - Fixed an issue causing sibling menus or popovers to malfunction on iOS devices.
  - Resolved the problem where the context menu trigger showed the magnifier and iOS context menu on
    long press.
  - Fixed an issue where `RadioOptionItem` did not provide the `checked` state in context.
- **Editable**: Fixed a bug where setting `activationMode` to `dblclick` unexpectedly cleared the
  input value.
- **Checkbox**: Added the missing `group` role for the Checkbox group component.
- **RootProvider**: Added the missing `RootProvider` for the `ColorPicker`, `NumberInput`,
  `RatingGroup`, `SegmentGroup`, and `ToggleGroup` components.

## [3.3.0] - 2024-06-12

### Added

- **Signature Pad**: Introduced the `SignaturePad` component for capturing signatures.
- **QR Code**: Added the `QRCode` component for generating QR codes.
- **CheckboxGroup**: Added the `CheckboxGroup` component for managing multiple checkboxes.
- **Presence**: Added support for `immediate` to synchronize presence changes immediately instead of
  deferring to the next tick.

### Fixed

- **TreeView**: Resolved an issue where the tree view state could be updated after setting
  `defaultSelectedValue` or `defaultExpandedValue`.
- **Tabs**: Resolved an issue where rapidly changing the selected tab could briefly show previous
  tab content.
- **FileUpload**: Fixed an issue where the `onFileAccept` event was triggered when deleting an item
  via the delete trigger.
- **Select**: Exported the missing `SelectList` component.

## [3.2.2] - 2024-06-07̊

### Fixed

- **Combobox**: Exported missing `ComboboxList` component.
- **Toast**: Resolved an issue where `ToastRoot` doesn't merge its incoming props correctly.

## [3.2.1] - 2024-06-06

### Fixed

- Resolved an issue where the component context could be undefined in some components.

## [3.2.0] - 2024-06-06

### Added

- **All Components**: Introduced the `Provider` component for easier access to internal machine
  APIs, improving component composition. See the example below:

```tsx
import { Avatar, useAvatar } from '@ark-ui/solid'

export const Example = () => {
  const avatar = useAvatar({
    onStatusChange: (e) => console.log('status changed', e),
  })

  return (
    <Avatar.RootProvider value={avatar}>
      <Avatar.Fallback>PA</Avatar.Fallback>
      <Avatar.Image src="https://i.pravatar.cc/300" alt="avatar" />
    </Avatar.RootProvider>
  )
}
```

## [3.1.0] - 2024-06-04

### Added

- **Editable**: Supported `textarea` as the input element in edit mode.

### Fixed

- Fixed an issue where spreading `readOnly: false` adds the `readonly` attribute on editable
  elements, making them uneditable.
- **Factory**: Fixed an issue where the `ark` factory was incorretly adding the parent ref to the
  child component.
- **Select**: Fixed an issue where changing the label of a collection item did not trigger a change
  event.
- **Popover**:

  - Implemented `autoFocus` to determine whether the popover should autofocus on open:
    - When `true`, the first focusable element or the content is focused.
    - When `false`, the content is focused.
  - Fixed an issue where the page scroll resets on opening the popover.

- **DatePicker**: Fixed an issue in range mode where calendar close unexpectedly when hovering on a
  day quickly.

## [3.0.2] - 2024-05-29

### Changed

- **Avatar**: Improved image load check by using `naturalWidth` and `naturalHeight` instead of
  `currentSrc`.

## [3.0.1] - 2024-05-27

### Fixed

- Added missing export for `HiddenInput` in `Slider`.
- Added missing export for `ItemHiddenInput` in `RadioGroup` and `SegmentGroup`.

## [3.0.0] - 2024-05-24

### Highlights

The 3.0 release brings significant enhancements and some breaking changes for a more streamlined and
flexible API. Key updates include new components and types, improved form integration, and enhanced
forward compatibility. Here are some highlights:

### Added

- **Context Components**: Introduced the `Context` component for easier access to internal machine
  APIs, improving component composition. See the example below:

```tsx
export const Basic = () => (
  <Popover.Root>
    <Popover.Trigger>Open</Popover.Trigger>
    <Popover.Positioner>
      <Popover.Context>
        {(popover) => (
          <Popover.Content>
            <Popover.Title onClick={() => popover().setOpen(false)}>Title</Popover.Title>
            <Popover.Description>Description</Popover.Description>
          </Popover.Content>
        )}
      </Popover.Context>
    </Popover.Positioner>
  </Popover.Root>
)
```

- **Format**: Added a `Format` component for formatting bytes and numbers.

```tsx
<Format.Byte value={120904} unit="byte" unitDisplay="short" />
<Format.Number value={1204} unit="centimeter" />
```

- **Tooltip**: Added `defaultOpen` prop for cases where you do not need to control its open state.
- **Types**: Exported `Assign` and `Optional` types to enhance type handling.
- **Toast**: Added support for overlapping and stacked toast.

### Changed

- **[BREAKING]**: Exposed hidden inputs in `Checkbox`, `ColorPicker`, `FileUpload`, `PinInput`,
  `RadioGroup`, `RatingGroup`, `SegmentGroup`, `Select`, `Slider`, `Switch`, and `TagsInput` for
  better form library compatibility. Please ensure to include the hidden input in your component
  like shown below:

```tsx
<Checkbox.Root>
  <Checkbox.Label>Checkbox</Checkbox.Label>
  <Checkbox.Control>
    <Checkbox.Indicator>
      <CheckIcon />
    </Checkbox.Indicator>
  </Checkbox.Control>
  <Checkbox.HiddenInput /> // [!code highlight]
</Checkbox.Root>
```

- **[BREAKING]**: Made `id` optional and removed `for` from `ItemGroupLabel` in `Combobox` and
  `Select` for cleaner markup.

```diff
- <Combobox.ItemGroup id="framework">
-   <Combobox.ItemGroupLabel for="framework">Frameworks</Combobox.ItemGroupLabel>
+ <Combobox.ItemGroup>
+   <Combobox.ItemGroupLabel>Frameworks</Combobox.ItemGroupLabel>
```

- **[BREAKING] Popover, Tooltip**: Renamed `closeOnEsc` to `closeOnEscape` to be consistent with
  dialog machine.
- **[BREAKING] Combobox, Menu, Select, Tabs, ToggleGroup**: Renamed `loop` to `focusLopp` to be more
  descriptive.
- **[BREAKING]**: Renamed `Environment` to `EnvironmentProvider` to align with other providers.
- Refined the `as` prop implementation for improved type merging and performance.

```tsx
// before
<Button as={Dialog.Trigger} variant="solid" size="sm">
  Open Dialog
</Button>

// after
<Dialog.Trigger asChild={(props) => <Button {...props()} />}>
  Open Dialog
</Dialog.Trigger>
```

### Fixed

- **DatePicker**: Resolved issues with `min` and `max` props not supporting date strings.
- **Accordion**: Fixed initial flicker of content.
- **TagsInput**: Replaced `HTMLInputElement` with `HTMLDivElement` in `TagsInput.Root`.
- **Select, Combobox**: Fixed an issue with reactivity.
- **Toast**: Resolved an issue with `Toast` not updating its toasts and count properties when
  creating one or more toasts.
- **ColorPicker**: Added missing `HTMLArkProps<'div'>` to `ColorPicker.View`.

### Removed

- **[BREAKING]**: Dropped direct internal API access from Root components. Use the new `Context`
  component for more flexible and cleaner API integration.
- **[BREAKING]**: Simplified component APIs by removing `dir` and `getRootNode` attributes. Use
  [LocaleProvider](https://ark-ui.com/solid/docs/providers/environment) and
  [EnvironmentProvider](https://ark-ui.com/solid/docs/providers/locale) for these settings.

## [2.2.0] - 2024-02-27

### Added

- Added `Collapsible` component.
- Added new `FormatByte` and `FormatNumber` components.

### Changed

- Enhanced the performance of the Ark `factory` by utilizing `memo` to avoid unnecessary re-renders.
- Integrated `Collapsible` into `Accordion`, allowing the `Accordion` component to utilize
  `Collapsible` for animating the opening and closing of content.d

```css
@keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: var(--height);
  }
}

@keyframes slideUp {
  from {
    height: var(--height);
  }
  to {
    height: 0;
  }
}

[data-scope='accordion'][data-part='item-content'][data-state='open'] {
  animation: slideDown 250ms;
}

[data-scope='accordion'][data-part='item-content'][data-state='closed'] {
  animation: slideUp 200ms;
}
```

### Fixed

- Fixed a bug where the disabled `Tooltip` would flash upon hovering and clicking the trigger.
- Fixed an issue where a disclosure components could not be initially set to an open state without
  being controlled.

## [2.1.1] - 2024-02-16

### Fixed

- Resolved an issue where the `Clipboard` component was not exported correctly.

## [2.1.0] - 2024-02-14

### Added

- Introduced `Clipboard` component. Refer to the
  [documentation](https://ark-ui.com/docs/components/clipboard) for details.
- Implemented programmable control over the open state for `ColorPicker`, `DatePicker`, `Dialog`,
  `HoverCard`, `Menu`, `Popover`, `Select`, and `Tooltip`.
- Exported `SelectionDetails` type for the `Menu` component.
- Added a `PresetTrigger` part to the `DatePicker` component, enabling custom triggers for common
  date presets (e.g., Last 7 days, Last 30 days).
- Enhanced the `DatePicker.Control` component to support multiple inputs by introducing an optional
  `index` attribute to `DatePicker.Input`. Example usage:

```jsx
<DatePicker.Control>
  <DatePicker.Input index={0} />
  <DatePicker.Input index={1} />
</DatePicker.Control>
```

### Changed

- Refined the `TreeView` component API for streamlined component usage. See the
  [documentation](https://ark-ui.com/docs/components/tree-view) for details.
- Updated `Dialog.Description` and `Popover.Description` elements from `p` to `div` for better
  paragraph handling.
- Altered `TreeView.BranchTrigger` element from `button` to `div` for accessibility enhancements.

### Fixed

- Resolved unintentional interactions when clicking the scrollbar.
- Addressed an issue where positioned components failed to adjust to window resizing.
- Corrected a behavior where restoring scroll position triggered a smooth scroll effect back to the
  starting point.
- Rectified a problem in `Combobox`, `Menu`, and `Select` where scrolling into view inadvertently
  scrolled the body element.
- Fixed a discrepancy in `DatePicker` regarding the incorrect display of weeks when setting
  `startOfWeek`.
- Solved an issue in the `Editable` preventing text deletion upon reaching `maxLength`.
- Corrected an issue in the `Select` where an item group's label `id` was misdirected.
- Adjusted `Select` to use the correct `id` for the `aria-activedescendant` attribute.

## [2.0.1] - 2024-01-30

### Fixed

- Resolved an issue that for some components the types were not being generated correctly.
- Fix issue where `Select` component submits its first option when used in a form, even if there is
  no value selected.

## [2.0.0] - 2024-01-30

### Added

- Added `TreeView` component
- Updated `@zag-js` dependencies to their latest versions, enhancing performance for all components.

### Changed

- **Breaking Change**: Renamed the `asChild` to `as` prop. The `as` prop now accepts a native HTML
  element or a custom component. For example:

```diff
- <Popover.Trigger asChild><Button>Open</Button></Popover.Trigger>
+ <Popover.Trigger as={<Button>Open</Button>} />
```

- **Breaking Change**: Renamed the root types for all components to `<ComponentName>RootProps`. Like
  shown for the `Avatar` component below:

```diff
- import type { AvatarProps } from "@ark-ui/solid"
+ import type { AvatarRootProps } from "@ark-ui/solid"
```

- **Breaking Change**: Removed the `.Root` suffix for provider component like `Presence` and
  `Environment`.

```diff
- <Presence.Root>...</Presence.Root>
+ <Presence>...</Presence>
```

- **Breaking Change**: Renamed the `indicator` part to `view` in the `Progress` component to more
  accurately reflect its functionality.

- Added the `ItemPreview` component to the `TagsInput` component. See the example below:

```diff
<TagsInput.Item index={index} value={value()}>
+  <TagsInput.ItemPreview>
    <TagsInput.ItemText>{value}</TagsInput.ItemText>
    <TagsInput.ItemDeleteTrigger>Delete</TagsInput.ItemDeleteTrigger>
+ </TagsInput.ItemPreview>
  <TagsInput.ItemInput />
</TagsInput.Item>
```

### Fixed

- Fixed an issue on touch devices where selecting an item within `Combobox`, `Menu`, or `Select`
  triggered a click event on the element behind the portalled content.
- Fixed an issue in `PinInput` where pasting a value filled all inputs instead of populating them
  one per input.

## [1.3.0] - 2024-01-17

### Added

- Added the `Progress` component.
- Added `valueAsString` to `onValueChange` in `DatePicker` callback details
- Exported change details typings, for example `AccordionValueChangeDetails` or
  `DialogOpenChangeDetails`

### Changed

- Changed `Popover.Description` tag from `div` to `p`
- Changed `PopoverDescriptionProps` type from `div` to `p`
- Replaced the styling props for indicator with CSS variables in `RadioGroup`, `SegmentGroup`, and
  `Tabs`.

### Fixed

- Fixed multiple rerenders on `Select` component using search params
- Fixed reactivity with collection in `Select` and `Combobox` components
- Fixed the issue where setting `disabled` on `Combobox` does not reflect in combobox item
- Fix an issue that breaks the `Combobox` when clicking on the input while the menu is open
- Fixed the issue where `DatePicker` initial value isn't set when using controlled context
- Resolved an issue that `asChild` did not work properly with `svg` elements.
- Resolved an issue that `Menu` option item could not be activated by keyboard

## [1.2.0] - 2023-12-13

### Added

- Added the `ToastGroup` component.

### Changed

- Revised the `FileUpload` component. Check out the
  [documentation](https://ark-ui.com/docs/components/file-upload) for more information.

### Fixed

- Resolved a problem where `Select.Indicator` was assigned to the wrong `data-part`.
- Fixed an issue where keyboard interactions within a submenu would bubble up to the parent `Menu`.

## [1.1.0] - 2023-11-21

### Added

- Added render function to the `NumberInput` component
- Added `FileUpload` component

### Changed

- Revised the `ColorPicker` component. Check out the
  [documentation](https://ark-ui.com/docs/components/color-picker) for more information.

### Fixed

- Resolved a problem where the `Dialog.CloseTrigger` was assigned to the wrong `data-part`.
- Fixed various issues for the `Toast` component that were caused by the API not being wrapped in an
  `Accessor`.

```jsx
// before
const [Toaster, toast] = createToaster({
  placement: 'top-end',
  render(toast) {
    return (
      <Toast.Root>
        <Toast.Title>{toast.title}</Toast.Title>
        <Toast.Description>{toast.description}</Toast.Description>
        <Toast.CloseTrigger>Close</Toast.CloseTrigger>
      </Toast.Root>
    )
  },
})

// after
const [Toaster, toast] = createToaster({
  placement: 'top-end',
  render(toast) {
    return (
      <Toast.Root>
        <Toast.Title>{toast().title}</Toast.Title>
        <Toast.Description>{toast().description}</Toast.Description>
        <Toast.CloseTrigger>Close</Toast.CloseTrigger>
      </Toast.Root>
    )
  },
})
```

## [1.0.1] - 2023-11-10

### Fixed

- Resolved an issue where the `Dialog` component would not animate on exit.
- Resolved various issues for `Menu` when lazy mounted.
- Resolved an issue where `MenuTrigger` could still work even when disabled.
- Resolved an issue where components like `Dialog`, `Popover` etc would not invoke `onExitComplete`
- Fixed an issue where placement of the `Combobox` could be incorrect when lazy mounted.

## [1.0.0] - 2023-11-09

We are happy to announce the release of `@ark-ui/solid@1.0.0`. This release includes a number of
breaking changes, new features, and bug fixes. Since our last release over two months ago, we will
only highlight some key changes. Please refer to the documentation for each component to learn more.

### Highlights

- Revised the `Presence` component: `lazyMount` and `unmountOnExit` have been added at the root
  level. For some disclosure components like `Tabs` and `Accordion`, this constitutes a breaking
  change.
- Breaking changes have been implemented in `Accordion`, `ColorPicker`, `DatePicker`, `Dialog`,
  `RadioGroup`, `SegmentGroup`, `TagsInput`, `Toast`, and `ToggleGroup` to achieve a consistent and
  more intuitive API.
- Resolved various bugs and addressed accessibility issues across all components.

### Stability and Support

With the release of version 1.0.0, we are moving towards a more stable version of `@ark-ui/solid`.
Future updates will strive to avoid breaking changes, ensuring a smoother experience for our users.
If you encounter any issues while upgrading, please do not hesitate to open an issue on our
[GitHub repository](https://github.com/chakra-ui/ark/issues). Your feedback is invaluable in helping
us improve.

## [0.11.0] - 2023-09-08

### Added

- Added `Presence` component
- To improve performance and reduce initial load times, we've introduced two new properties to the
  `AccordionContent`, `ComboboxContent`, `DialogBackdrop`, `DialogContent`, `HoverCardContent`,
  `MenuContent`, `PopoverContent`, `SelectContent`, and `TooltipContent` components. The `lazyMount`
  property allows for on-demand rendering of content, while the `unmountOnExit` property enables the
  removal of the component from the DOM once it's no longer required, ensuring better resource
  management and cleaner code.

### Fixed

- Resolved an issue where the `ark` factory was not exported correctly.

## [0.10.1] - 2023-09-02

### Fixed

- Resolved an issue where the `ColorPicker` was not exported correctly.

## [0.10.0] - 2023-09-02

### Addded

- Added `DatePickerPositioner` component to the `DatePicker` component to help with positioning the
  calendar.
- Added `ComboboxOptionGroupLabel` to the `Combobox` component. This component can be used to render
  a label for a group of options in the `ComboboxOptionGroup` component.
- Exposed `ark` factory function.

### Changed

- BREAKING: Renamed `NumberInputField` to `NumberInputInput` to match the naming convention of other
  input components.
- BREAKING: Renamed `PinInputField` to `PinInputInput` to match the naming convention of other input
  components.
- BREAKING: Renamed `TagsInputField` to `TagsInputInput` to match the naming convention of other
  input components.
- BREAKING: Renamed `SegmentIndicator` to `SegmentGroupIndicator` to match the naming convention of
  other components.

### Removed

- BREAKING: Removed `CheckboxInput`. This component is no longer required.
- BREAKING: Removed `RadioInput`. This component is no longer required.
- BREAKING: Removed `SegmentInput`. This component is no longer required.

### Fixed

- Added missing exports for `ColorPicker`.

## [0.9.0] - 2023-08-06

### Added

- Enhanced `Carousel` component: Introduced `CarouselIndicator` and `CarouselIndicatorGroup`
  components. These sub-components offer finer control over the carousel navigation, enabling users
  to directly access desired carousel slides.
- Expose `use<X>Context` for all components that use context.
- Added `ComboboxOptionGroup` and `ComboboxClearTrigger` components to the `Combobox` component.
- Developers can now set default options for all `Toast` components in their application, ensuring a
  consistent look and feel across the board.

## [0.8.1] - 2023-07-10

### Fixed

- Resolved an issue whre the `Toast` component would not render custom content.
- Fixed an issue where standalone imports were not working as expected.

## [0.8.0] - 2023-07-06

### Added

- Added support for `SSR`

### Fixed

- Resolved an issue where the `SegmentGroup` component would not animate on the first click.

## [0.7.1] - 2023-06-30

### Fixed

- Resolved an issue that types accross various components were not being exported correctly.

## [0.7.0] - 2023-06-27

### Added

- Added `Avatar`
- Added `SegmentGroup`
- Support for standalone component imports: Developers can now import individual components, such as
  `@ark-ui/solid/tabs` instead of the full `@ark-ui/solid` package. This is a significant feature
  for those working with bundlers that do not support tree-shaking. By allowing imports of
  individual components, we ensure a reduced bundle size when the full package import is not
  necessary.

## [0.6.0] - 2023-06-03

### Added

- Added `DatePicker` component
- Introduced the `onLongPress` property to `Pressable`

### Changed

- Exposed direct access to the `Splitter` component's internal API, enabling more control over the
  component's state.
- Updated all `@zag-js` dependencies to their latest versions

## [0.5.0] - 2023-05-25

### Removed

- Removed `AccordionIcon`

## [0.4.0] - 2023-05-23

### Added

- Add `Switch`

### Changed

- Update `Checkbox`. Control `indeterminate` state in `checked` prop

## [0.3.0] - 2023-05-11

### Added

- Add support for `asChild`

## [0.2.0] - 2023-04-29

### Added

- Add `ColorPicker`

### Fixed

- Add missing exports for `RangeSlider`, `Splitter` and `Toast`

## [0.1.0] - 2023-04-17

### Added

- Add `Accordion`
- Add `Carousel`
- Add `Checkbox`
- Add `Combobox`
- Add `DatePicker`
- Add `Dialog`
- Add `Editable`
- Add `HoverCard`
- Add `Menu`
- Add `NumberInput`
- Add `Pagination`
- Add `PinInput`
- Add `Popover`
- Add `Pressable`
- Add `RadioGroup`
- Add `RangeSlider`
- Add `RatingGroup`
- Add `Select`
- Add `Slider`
- Add `Splitter`
- Add `Tabs`
- Add `TagsInput`
- Add `Toast`
- Add `Tooltip`
