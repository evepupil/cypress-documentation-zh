// 导入原始映射器
import MDXComponents from "@theme-original/MDXComponents";
import AnatomyOfAnError from "@site/docs/partials/_anatomy-of-an-error.mdx";
import AccessibilityPremiumNote from "@site/docs/partials/_accessibility-premium-note.mdx";
import AttributeFilters from "@site/docs/partials/_attributefilters.mdx";
import AutoCancellationBenefits from "@site/docs/partials/_auto-cancellation-benefits.mdx";
import Badge from "@site/src/components/badge";
import Btn from "@site/src/components/button";
import ComponentOnlyBadge from "@site/src/components/component-only-badge";
import TestReplayInfo from "@site/docs/partials/_test-replay-info.mdx";
import CypressConfigFileTabs from "@site/src/components/cypress-config-file-tabs";
import CypressInstallCommands from "@site/docs/partials/_cypress-install-commands.mdx";
import CypressOpenCommands from "@site/docs/partials/_cypress-open-commands.mdx";
import CypressRunCommands from "@site/docs/partials/_cypress-run-commands.mdx";
import DefaultSelectorPriority from "@site/docs/partials/_default-selector-priority.mdx";
import DocsImage from "@site/src/components/docs-image";
import DocsVideo from "@site/src/components/docs-video";
import DocumentDomainWorkaround from "@site/docs/partials/_document-domain-workaround.mdx";
import E2EOnlyBadge from "@site/src/components/e2e-only-badge";
import E2EOrCtTabs from "@site/src/components/e2e-or-ct-tabs";
import ElementFilters from "@site/docs/partials/_elementfilters.mdx";
import VueSyntaxTabs from "@site/src/components/vue-syntax-tabs";
import HeaderAssertions from "@site/docs/partials/_header-assertions.mdx";
import HeaderRequirements from "@site/docs/partials/_header-requirements.mdx";
import HeaderTimeouts from "@site/docs/partials/_header-timeouts.mdx";
import HeaderYields from "@site/docs/partials/_header-yields.mdx";
import Icon from "@site/src/components/icon";
import ImportMountFunctions from "@site/docs/partials/_import-mount-functions.mdx";
import IntellisenseCodeCompletion from "@site/docs/partials/_intellisense-code-completion.mdx";
import ProductHeading from "@site/src/components/product-heading";
import SignificantAttributes from "@site/docs/partials/_significantattributes.mdx";
import SourceMaps from "@site/docs/partials/_source-maps.mdx";
import SupportFileConfiguration from "@site/docs/partials/_support-file-configuration.mdx";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import ThenShouldAndDifference from "@site/docs/partials/_then-should-and-difference.mdx";
import WarningSetupNodeEvents from "@site/docs/partials/_warning-setup-node-events.mdx";
import VideoRecordingSupportedBrowsers from "@site/docs/partials/_video-recording-supported-browsers.mdx"
import ViewFilters from "@site/docs/partials/_viewfilters.mdx";
import Views from "@site/docs/partials/_views.mdx";
import LineBreak from "@site/src/components/line-break";
import Logo from "@site/src/components/logo";
import CloudFreePlan from "@site/docs/partials/_cloud_free_plan.mdx";
import CiProviderCloudSteps from "@site/docs/partials/_ci_provider_cloud_steps.mdx";
import UrlAllowList from "@site/docs/partials/_url_allowlist.mdx";
import UICovPremiumNote from "@site/docs/partials/_ui-coverage-premium-note.mdx";

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faAngleRight,
  faBan,
  faBook,
  faBug,
  faCamera,
  faCheck,
  faCheckCircle,
  faCheckSquare,
  faChevronLeft,
  faChevronRight,
  faCode,
  faCog,
  faCogs,
  faCopy,
  faCrosshairs,
  faDownload,
  faExclamationTriangle,
  faExternalLinkAlt,
  faFileCode,
  faFolderOpen,
  faGlobe,
  faGraduationCap,
  faHeart,
  faHistory,
  faImage,
  faLongArrowAltUp,
  faMagic,
  faMousePointer,
  faPlayCircle,
  faPlus,
  faQuestionCircle,
  faSearch,
  faShieldHalved,
  faLaptopCode,
  faStar,
  faSyncAlt,
  faTerminal,
  faTimes,
  faTree,
  faVideo,
  faMagnifyingGlassChart,
  faComputer,
  faBugSlash,
  faChartLine,
  faClock,
  faBookOpenReader,
  faUserShield,
  faCircleHalfStroke,
  faCheckDouble,
  faLinkSlash,
  faListCheck,
  faClipboardCheck,
  faFilter,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  fab,
  faAngleRight,
  faBan,
  faBook,
  faBug,
  faCamera,
  faCheck,
  faCheckCircle,
  faCheckSquare,
  faChevronLeft,
  faChevronRight,
  faCode,
  faCog,
  faCogs,
  faCopy,
  faCrosshairs,
  faDownload,
  faExclamationTriangle,
  faExternalLinkAlt,
  faFileCode,
  faFolderOpen,
  faGlobe,
  faGraduationCap,
  faHeart,
  faHistory,
  faImage,
  faLongArrowAltUp,
  faMagic,
  faMousePointer,
  faPlayCircle,
  faPlus,
  faQuestionCircle,
  faSearch,
  faLaptopCode,
  faShieldHalved,
  faStar,
  faSyncAlt,
  faTerminal,
  faTimes,
  faTree,
  faVideo,
  faMagnifyingGlassChart,
  faComputer,
  faBugSlash,
  faChartLine,
  faClock,
  faBookOpenReader,
  faUserShield,
  faCircleHalfStroke,
  faCheckDouble,
  faLinkSlash,
  faListCheck,
  faClipboardCheck,
  faFilter,
)

export default {
  // 复用默认映射
  ...MDXComponents,
  AnatomyOfAnError,
  AccessibilityPremiumNote,
  AttributeFilters,
  AutoCancellationBenefits,
  Badge,
  Btn,
  ComponentOnlyBadge,
  CypressConfigFileTabs,
  CypressInstallCommands,
  CypressOpenCommands,
  CypressRunCommands,
  DefaultSelectorPriority,
  DocsImage,
  DocsVideo,
  DocumentDomainWorkaround,
  E2EOnlyBadge,
  E2EOrCtTabs,
  ElementFilters,
  VueSyntaxTabs,
  HeaderAssertions,
  HeaderRequirements,
  HeaderTimeouts,
  HeaderYields,
  Icon,
  ImportMountFunctions,
  IntellisenseCodeCompletion,
  ProductHeading,
  SignificantAttributes,
  SourceMaps,
  SupportFileConfiguration,
  Tabs,
  TabItem,
  TestReplayInfo,
  ThenShouldAndDifference,
  WarningSetupNodeEvents,
  VideoRecordingSupportedBrowsers,
  ViewFilters,
  Views,
  Logo,
  LineBreak,
  CloudFreePlan,
  CiProviderCloudSteps,
  UrlAllowList,
  UICovPremiumNote,
}