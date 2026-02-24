# Implementation Plan: Bilingual i18n Support

## Overview

This implementation plan breaks down the bilingual i18n support feature into discrete, incremental tasks. Each task builds on previous work and includes testing to validate correctness early. The implementation follows the Nuxt 3 i18n module integration pattern with proper TypeScript support.

## Tasks

- [ ] 1. Install and configure i18n module
  - Install @nuxtjs/i18n package as a dependency
  - Update nuxt.config.ts to register the i18n module
  - Configure locales array with English and Persian definitions
  - Set default locale to 'en' and strategy to 'prefix_except_default'
  - Configure langDir to point to 'locales/' directory
  - Enable browser language detection with cookie persistence
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

- [ ]* 1.1 Write unit test for i18n configuration
  - Verify default locale is 'en'
  - Verify two locales are configured with correct properties
  - _Requirements: 1.3, 1.4_

- [ ] 2. Create translation files
  - [ ] 2.1 Create locales directory in project root
    - Create locales/ folder
    - _Requirements: 2.1_

  - [ ] 2.2 Create English translation file
    - Create locales/en.json with sidebar and general namespaces
    - Add all required translation keys and values
    - _Requirements: 2.2, 2.4, 2.5, 2.6_

  - [ ] 2.3 Create Persian translation file
    - Create locales/fa.json with sidebar and general namespaces
    - Add all required Persian translation keys and values
    - _Requirements: 2.3, 2.4, 2.5, 2.7_

  - [ ]* 2.4 Write unit tests for translation file structure
    - Verify en.json contains all required keys
    - Verify fa.json contains all required keys
    - Verify translation values are non-empty strings
    - _Requirements: 2.4, 2.5, 2.6, 2.7_

- [ ] 3. Checkpoint - Verify i18n module loads translations
  - Ensure the application starts without errors
  - Verify translations are accessible via $t() function
  - Ask the user if questions arise

- [ ] 4. Create LanguageSwitcher component
  - [ ] 4.1 Implement LanguageSwitcher.vue component
    - Create component file in app/components/
    - Use useI18n composable to access locale state
    - Implement toggle function to switch between en and fa
    - Add flag icons: 🇬🇧 for English, 🇮🇷 for Persian/Iran
    - Display current flag and locale code (e.g., "🇬🇧 EN")
    - Style component to match application design system and header context
    - _Requirements: 3.1, 3.2, 3.3_

  - [ ]* 4.2 Write property test for locale toggle
    - **Property 2: Locale Toggle Behavior**
    - **Validates: Requirements 3.3**

  - [ ]* 4.3 Write unit tests for LanguageSwitcher component
    - Test component renders with correct locale display
    - Test correct flag icon is displayed for each locale
    - Test click handler calls setLocale with alternate locale
    - _Requirements: 3.2, 3.3_

- [ ] 5. Update app.vue for dynamic HTML attributes
  - [ ] 5.1 Add i18n composable and head management
    - Import useI18n composable
    - Compute current locale properties (dir, lang)
    - Use useHead to set htmlAttrs.lang and htmlAttrs.dir dynamically
    - Add conditional link tag for Vazirmatn font (only when locale is 'fa')
    - _Requirements: 4.1, 4.2, 4.3, 5.1, 5.2, 5.3_

  - [ ]* 5.2 Write property test for dir attribute synchronization
    - **Property 3: Dynamic Dir Attribute Synchronization**
    - **Validates: Requirements 4.1, 4.2, 4.3**

  - [ ]* 5.3 Write unit tests for HTML attributes
    - Test lang attribute matches current locale
    - Test dir attribute is 'ltr' for English
    - Test dir attribute is 'rtl' for Persian
    - Test Persian font link is present when locale is 'fa'
    - Test Persian font link is absent when locale is 'en'
    - _Requirements: 4.1, 4.2, 5.1, 5.3, 5.5_

- [ ] 6. Update layouts/default.vue for i18n integration
  - [ ] 6.1 Replace hardcoded menu labels with translation keys
    - Update menuItems array to use translation keys (e.g., 'sidebar.dashboard')
    - Replace {{ item.label }} with {{ $t(item.label) }} in template
    - Add useI18n composable for locale state access
    - Add useHead to set htmlAttrs dynamically (if not already in app.vue)
    - _Requirements: 6.1, 6.2, 6.3, 6.5_

  - [ ] 6.2 Integrate LanguageSwitcher component into header
    - Import LanguageSwitcher component
    - Add component to header/navigation area for easy visibility
    - Ensure proper spacing and styling in header context
    - Position for optimal user accessibility
    - _Requirements: 3.5_

  - [ ]* 6.3 Write unit tests for layout translations
    - Test menu items display translated text
    - Test translations update when locale changes
    - _Requirements: 6.5, 6.7_

- [ ] 7. Checkpoint - Test language switching end-to-end
  - Manually test switching between English and Persian
  - Verify all menu items translate correctly
  - Verify dir attribute changes
  - Verify Persian font loads
  - Ensure all tests pass
  - Ask the user if questions arise

- [ ] 8. Implement property-based tests for URL handling
  - [ ]* 8.1 Write property test for URL locale prefix consistency
    - **Property 1: URL Locale Prefix Consistency**
    - **Validates: Requirements 1.6, 1.7, 8.1, 8.2**

  - [ ]* 8.2 Write property test for URL-based locale activation
    - **Property 8: URL-Based Locale Activation**
    - **Validates: Requirements 8.3**

  - [ ]* 8.3 Write property test for URL preservation during locale switch
    - **Property 9: URL Preservation During Locale Switch**
    - **Validates: Requirements 8.4**

  - [ ]* 8.4 Write property test for route equivalence on locale switch
    - **Property 10: Route Equivalence on Locale Switch**
    - **Validates: Requirements 8.5**

  - [ ]* 8.5 Write property test for localized link generation
    - **Property 11: Localized Link Generation**
    - **Validates: Requirements 8.6**

- [ ] 9. Implement property-based tests for translation system
  - [ ]* 9.1 Write property test for missing translation key fallback
    - **Property 4: Missing Translation Key Fallback**
    - **Validates: Requirements 6.4**

  - [ ]* 9.2 Write property test for translation reactivity
    - **Property 5: Translation Reactivity**
    - **Validates: Requirements 6.7**

- [ ] 10. Implement property-based tests for locale persistence
  - [ ]* 10.1 Write property test for locale preference persistence
    - **Property 6: Locale Preference Persistence**
    - **Validates: Requirements 7.1**

  - [ ]* 10.2 Write property test for locale preference restoration
    - **Property 7: Locale Preference Restoration Round-Trip**
    - **Validates: Requirements 7.2**

  - [ ]* 10.3 Write unit tests for locale persistence edge cases
    - Test default locale is used when no preference exists
    - Test stored preference takes precedence over browser detection
    - _Requirements: 7.3, 7.4_

- [ ] 11. Add RTL-specific CSS adjustments
  - [ ] 11.1 Create or update CSS for RTL support
    - Add CSS rules for [dir="rtl"] if needed
    - Ensure Tailwind RTL utilities work correctly
    - Test layout in both LTR and RTL modes
    - Fix any layout issues specific to RTL
    - _Requirements: 4.4, 4.5_

  - [ ]* 11.2 Write unit test for RTL text alignment
    - Test text alignment changes based on dir attribute
    - _Requirements: 4.4_

- [ ] 12. Implement chatbot language selection
  - [ ] 12.1 Add chatbot translation keys to translation files
    - Add 'chatbot' namespace to en.json with keys: language_label, language_english, language_persian, language_changed, placeholder, send_button
    - Add 'chatbot' namespace to fa.json with Persian translations
    - _Requirements: 9.10_

  - [ ] 12.2 Create or update ShanbeAgent component with language selector
    - Add language selector dropdown/toggle to chatbot UI
    - Implement chatbotLanguage reactive state
    - Initialize chatbot language from localStorage or default to current locale
    - Add onLanguageChange handler to persist selection
    - Display notification when language changes
    - _Requirements: 9.1, 9.2, 9.5, 9.7, 9.9_

  - [ ] 12.3 Update sendMessage function to include language parameter
    - Modify sendMessage to read chatbot language from localStorage
    - Update API request payload to include language field
    - Ensure payload format matches: `{"question": "string", "language": "English"}` or `{"question": "string", "language": "Persian"}`
    - _Requirements: 9.3, 9.4_

  - [ ] 12.4 Update initial greeting to use selected chatbot language
    - Modify loadInitialGreeting or equivalent function
    - Fetch greeting based on stored chatbot language
    - _Requirements: 9.8_

  - [ ] 12.5 Translate chatbot UI elements using global locale
    - Replace hardcoded text with $t() calls for placeholder, buttons, labels
    - Ensure UI elements use global application locale, not chatbot language
    - _Requirements: 9.10_

  - [ ]* 12.6 Write property test for chatbot language persistence
    - **Property 12: Chatbot Language Persistence**
    - **Validates: Requirements 9.7**

  - [ ]* 12.7 Write property test for chatbot language restoration
    - **Property 13: Chatbot Language Restoration Round-Trip**
    - **Validates: Requirements 9.7**

  - [ ]* 12.8 Write property test for chatbot API request format
    - **Property 14: Chatbot API Request Format**
    - **Validates: Requirements 9.3, 9.4**

  - [ ]* 12.9 Write property test for chatbot language default behavior
    - **Property 15: Chatbot Language Default Behavior**
    - **Validates: Requirements 9.5**

  - [ ]* 12.10 Write property test for chatbot language independence
    - **Property 16: Chatbot Language Independence**
    - **Validates: Requirements 9.6**

  - [ ]* 12.11 Write unit tests for chatbot language selector
    - Test selector displays correct options
    - Test language change updates localStorage
    - Test notification is shown on language change
    - Test default language matches application locale
    - _Requirements: 9.1, 9.2, 9.5, 9.7, 9.9_

- [ ] 13. Checkpoint - Test chatbot language selection
  - Test chatbot language selector in both English and Persian UI
  - Verify API requests include correct language parameter
  - Test language persistence across page reloads
  - Verify independence from global locale changes
  - Ensure all tests pass
  - Ask the user if questions arise

- [ ] 14. Final integration and testing
  - [ ] 14.1 Test all pages with both locales
    - Navigate to all pages (/, /agents, /about, /contact)
    - Verify translations work on all pages
    - Verify RTL layout works correctly
    - Test language switching on each page
    - _Requirements: All_

  - [ ] 14.2 Test URL navigation and persistence
    - Test direct navigation to /fa/agents
    - Test locale persistence after page reload
    - Test query parameters are preserved
    - _Requirements: 7.2, 8.3, 8.4_

  - [ ] 14.3 Test chatbot language selection end-to-end
    - Test chatbot with all combinations of UI locale and chatbot language
    - Verify API requests contain correct language parameter
    - Test persistence across sessions
    - _Requirements: 9.3, 9.4, 9.6, 9.7_

  - [ ]* 14.4 Write integration tests for complete user flows
    - Test: Load app → Switch language → Navigate → Reload → Verify locale
    - Test: Direct navigation to localized URL → Verify locale activated
    - Test: Change chatbot language → Send message → Verify API payload
    - _Requirements: 7.2, 8.3, 9.3, 9.7_

- [ ] 15. Final checkpoint - Ensure all tests pass
  - Run all unit tests and property-based tests
  - Verify no console errors or warnings
  - Ensure all requirements are met
  - Ask the user if questions arise

## Notes

- Tasks marked with `*` are optional testing tasks and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Property-based tests validate universal correctness properties
- Unit tests validate specific examples and edge cases
- Checkpoints ensure incremental validation throughout implementation
- The @nuxtjs/i18n module handles most routing and URL logic automatically
- Focus on proper configuration and integration rather than reimplementing i18n features
