/* eslint-disable max-len */

import { ButtonBuilder, ButtonParams } from './button';
import { ChannelMultiSelectBuilder, ChannelMultiSelectParams } from './channel-multi-select';
import { ChannelSelectBuilder, ChannelSelectParams } from './channel-select';
import { CheckboxesBuilder, CheckboxesParams } from './checkboxes';
import { ConversationMultiSelectBuilder, ConversationMultiSelectParams } from './conversation-multi-select';
import { ConversationSelectBuilder, ConversationSelectParams } from './conversation-select';
import { DatePickerBuilder, DatePickerParams } from './datepicker';
import { ExternalMultiSelectBuilder, ExternalMultiSelectParams } from './external-multi-select';
import { ExternalSelectBuilder, ExternalSelectParams } from './external-select';
import { ImgBuilder, ImgParams } from './img';
import { OverflowMenuBuilder, OverflowMenuParams } from './overflow-menu';
import { RadioButtonsBuilder, RadioButtonsParams } from './radio-buttons';
import { StaticMultiSelectBuilder, StaticMultiSelectParams } from './static-multi-select';
import { StaticSelectBuilder, StaticSelectParams } from './static-select';
import { TextInputBuilder, TextInputParams } from './text-input';
import { TimePickerBuilder, TimePickerParams } from './timepicker';
import { UserMultiSelectBuilder, UserMultiSelectParams } from './user-multi-select';
import { UserSelectBuilder, UserSelectParams } from './user-select';

export type {
  ButtonBuilder,
  ButtonParams,
  ChannelMultiSelectBuilder,
  ChannelMultiSelectParams,
  ChannelSelectBuilder,
  ChannelSelectParams,
  CheckboxesBuilder,
  CheckboxesParams,
  ConversationMultiSelectBuilder,
  ConversationMultiSelectParams,
  ConversationSelectBuilder,
  ConversationSelectParams,
  DatePickerBuilder,
  DatePickerParams,
  ExternalMultiSelectBuilder,
  ExternalMultiSelectParams,
  ExternalSelectBuilder,
  ExternalSelectParams,
  ImgBuilder,
  ImgParams,
  OverflowMenuBuilder,
  OverflowMenuParams,
  RadioButtonsBuilder,
  RadioButtonsParams,
  StaticMultiSelectBuilder,
  StaticMultiSelectParams,
  StaticSelectBuilder,
  StaticSelectParams,
  TextInputBuilder,
  TextInputParams,
  TimePickerBuilder,
  TimePickerParams,
  UserMultiSelectBuilder,
  UserMultiSelectParams,
  UserSelectBuilder,
  UserSelectParams,
};

/**
 * Functions here do not use arrow functions stored in variables for IDE color compatibility.
 */

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.accessibilityLabel] Sets a longer descriptive text that will be read out by screen readers instead of the button text object.
 * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads.
 * @param {string} [params.text] Sets the display text for the button.
 * @param {string} [params.url] Sets the URL to redirect the user to when this button is clicked.
 * @param {string} [params.value] Sets the value to be passed to your app when this button is clicked.
 *
 * {@link https://api.slack.com/reference/block-kit/block-elements#button|View in Slack API Documentation}
 */

export function Button(params?: ButtonParams): ButtonBuilder {
  return new ButtonBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads.
 * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with.
 * @param {int} [params.maxSelectedItems] Sets a limit to how many items the user can select.
 *
 * {@link https://api.slack.com/reference/block-kit/block-elements#channel_multi_select|View in Slack API Documentation}
 */

export function ChannelMultiSelect(params?: ChannelMultiSelectParams): ChannelMultiSelectBuilder {
  return new ChannelMultiSelectBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads.
 * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with.
 * @param {string} [params.initialChannel] Sets the default selected item in the menu.
 *
 * {@link https://api.slack.com/reference/block-kit/block-elements#channel_select|View in Slack API Documentation}
 */

export function ChannelSelect(params?: ChannelSelectParams): ChannelSelectBuilder {
  return new ChannelSelectBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads.
 *
 * {@link https://api.slack.com/reference/block-kit/block-elements#checkboxes|View in Slack API Documentation}
 */

export function Checkboxes(params?: CheckboxesParams): CheckboxesBuilder {
  return new CheckboxesBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads.
 * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with.
 * @param {int} [params.maxSelectedItems] Sets a limit to how many items the user can select.
 *
 * {@link https://api.slack.com/reference/block-kit/block-elements#conversation_multi_select|View in Slack API Documentation}
 */

export function ConversationMultiSelect(params?: ConversationMultiSelectParams): ConversationMultiSelectBuilder {
  return new ConversationMultiSelectBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads.
 * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with.
 * @param {string} [params.initialConversation] Sets the default selected item in the menu.
 *
 * {@link https://api.slack.com/reference/block-kit/block-elements#conversation_multi_select|View in Slack API Documentation}
 */

export function ConversationSelect(params?: ConversationSelectParams): ConversationSelectBuilder {
  return new ConversationSelectBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads.
 * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with.
 * @param {string} [params.initialDate] Sets the default selected date in the menu.
 *
 * {@link https://api.slack.com/reference/block-kit/block-elements#datepicker|View in Slack API Documentation}
 */

export function DatePicker(params?: DatePickerParams): DatePickerBuilder {
  return new DatePickerBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads.
 * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with.
 * @param {int} [params.maxSelectedItems] Sets a limit to how many items the user can select.
 * @param {int} [params.minQueryLength] Sets a minimum number of characters types before querying your options URL.
 *
 * {@link https://api.slack.com/reference/block-kit/block-elements#external_multi_select|View in Slack API Documentation}
 */

export function ExternalMultiSelect(params?: ExternalMultiSelectParams): ExternalMultiSelectBuilder {
  return new ExternalMultiSelectBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads.
 * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with.
 * @param {int} [params.minQueryLength] Sets a minimum number of characters types before querying your options URL.
 *
 * {@link https://api.slack.com/reference/block-kit/block-elements#external_select|View in Slack API Documentation}
 */

export function ExternalSelect(params?: ExternalSelectParams): ExternalSelectBuilder {
  return new ExternalSelectBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.imageUrl] Sets the source URL from which the image will be loaded.
 * @param {string} [params.altText] Sets the textual summary of the image.
 *
 * {@link https://api.slack.com/reference/block-kit/block-elements#image|View in Slack API Documentation}
 */

export function Img(params?: ImgParams): ImgBuilder {
  return new ImgBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads.
 *
 * {@link https://api.slack.com/reference/block-kit/block-elements#overflow|View in Slack API Documentation}
 */

export function OverflowMenu(params?: OverflowMenuParams): OverflowMenuBuilder {
  return new OverflowMenuBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads.
 *
 * {@link https://api.slack.com/reference/block-kit/block-elements#radio|View in Slack API Documentation}
 */

export function RadioButtons(params?: RadioButtonsParams): RadioButtonsBuilder {
  return new RadioButtonsBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads.
 * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with.
 * @param {int} [params.maxSelectedItems] Sets a limit to how many items the user can select.
 *
 * {@link https://api.slack.com/reference/block-kit/block-elements#static_multi_select|View in Slack API Documentation}
 */

export function StaticMultiSelect(params?: StaticMultiSelectParams): StaticMultiSelectBuilder {
  return new StaticMultiSelectBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads.
 * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with.
 *
 * {@link https://api.slack.com/reference/block-kit/block-elements#static_select|View in Slack API Documentation}
 */

export function StaticSelect(params?: StaticSelectParams): StaticSelectBuilder {
  return new StaticSelectBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads.
 * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with.
 * @param {string} [params.initialValue] Sets the default text entered into the text input at modal render.
 * @param {int} [params.minLength] Sets a minimum character count in order for the user to submit the form.
 * @param {int} [params.maxLength] Sets a maximum character count allowed to send the form.
 *
 * {@link https://api.slack.com/reference/block-kit/block-elements#input|View in Slack API Documentation}
 */

export function TextInput(params?: TextInputParams): TextInputBuilder {
  return new TextInputBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads.
 * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with.
 * @param {string} [params.initialTime] Sets the default selected time in the menu.
 *
 * {@link https://api.slack.com/reference/block-kit/block-elements#timepicker|View in Slack API Documentation}
 */

export function TimePicker(params?: TimePickerParams): TimePickerBuilder {
  return new TimePickerBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads.
 * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with.
 * @param {int} [params.maxSelectedItems] Sets a limit to how many items the user can select.
 *
 * {@link https://api.slack.com/reference/block-kit/block-elements#users_multi_select|View in Slack API Documentation}
 */

export function UserMultiSelect(params?: UserMultiSelectParams): UserMultiSelectBuilder {
  return new UserMultiSelectBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads.
 * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with.
 * @param {string} [params.initialUser] Setts the default selected user in the menu.
 *
 * {@link https://api.slack.com/reference/block-kit/block-elements#users_select|View in Slack API Documentation}
 */

export function UserSelect(params?: UserSelectParams): UserSelectBuilder {
  return new UserSelectBuilder(params);
}

const elements = {
  Button,
  ChannelMultiSelect,
  ChannelSelect,
  Checkboxes,
  ConversationMultiSelect,
  ConversationSelect,
  DatePicker,
  ExternalMultiSelect,
  ExternalSelect,
  Img,
  OverflowMenu,
  RadioButtons,
  StaticMultiSelect,
  StaticSelect,
  TextInput,
  TimePicker,
  UserMultiSelect,
  UserSelect,
};

// Strange export. I know. For IDE highlighting purposes.

export { elements as Elements };
