import { parseCliArgs } from '../bin/functions/config/parseCliArgs';

import { defaultConfig } from '../bin/meta/config.mjs';

test('It should throw an error if no arguments array is passed', () => {
  expect(() => {
    parseCliArgs();
  }).toThrow();
});

/*
 * Debug mode
 */
test('It should return true for debugMode if passing "--debug"', () => {
  expect(parseCliArgs(['--debug'])).toEqual(
    expect.objectContaining({
      debugMode: true
    })
  );
});

/*
 * Recompile only local files
 */
test('It should return true for recompileLocal if passing "--recompileLocal"', () => {
  expect(parseCliArgs(['--recompileLocal'])).toEqual(
    expect.objectContaining({
      recompileLocal: true
    })
  );
});

/*
 * Sync graphics
 */
test('It should return true for syncGraphics if passing "--syncGraphics"', () => {
  expect(parseCliArgs(['--syncGraphics'])).toEqual(
    expect.objectContaining({
      syncGraphics: true
    })
  );
});

/*
 * Sync elements
 */
test('It should return true for syncElements if passing "--syncElements"', () => {
  expect(parseCliArgs(['--syncElements'])).toEqual(
    expect.objectContaining({
      syncElements: true
    })
  );
});

/*
 * Skip file generation: React
 */
test('It should return true for skipFileGeneration.react if passing "--skipReact"', () => {
  expect(parseCliArgs(['--skipReact'])).toEqual(
    expect.objectContaining({
      skipFileGeneration: {
        css: false,
        description: false,
        forceUpdate: true,
        react: true,
        storybook: false,
        styled: false
      }
    })
  );
});

/*
 * Skip file generation: Styled Components
 */
test('It should return true for skipFileGeneration.styled if passing "--skipStyled"', () => {
  expect(parseCliArgs(['--skipStyled'])).toEqual(
    expect.objectContaining({
      skipFileGeneration: {
        css: false,
        description: false,
        forceUpdate: true,
        react: false,
        storybook: false,
        styled: true
      }
    })
  );
});

/*
 * Skip file generation: CSS
 */
test('It should return true for skipFileGeneration.css if passing "--skipCss"', () => {
  expect(parseCliArgs(['--skipCss'])).toEqual(
    expect.objectContaining({
      skipFileGeneration: {
        css: true,
        description: false,
        forceUpdate: true,
        react: false,
        storybook: false,
        styled: false
      }
    })
  );
});

/*
 * Skip file generation: Storybook
 */
test('It should return true for skipFileGeneration.storybook if passing "--skipStorybook"', () => {
  expect(parseCliArgs(['--skipStorybook'])).toEqual(
    expect.objectContaining({
      skipFileGeneration: {
        css: false,
        description: false,
        forceUpdate: true,
        react: false,
        storybook: true,
        styled: false
      }
    })
  );
});

/*
 * Skip file generation: Markdown description
 */
test('It should return true for skipFileGeneration.styled if passing "--skipDescription"', () => {
  expect(parseCliArgs(['--skipDescription'])).toEqual(
    expect.objectContaining({
      skipFileGeneration: {
        css: false,
        description: true,
        forceUpdate: true,
        react: false,
        storybook: false,
        styled: false
      }
    })
  );
});

/*
 * Force update
 */
test('It should return true for skipFileGeneration.forceUpdate if passing "--forceUpdate"', () => {
  expect(parseCliArgs(['--forceUpdate'])).toEqual(
    expect.objectContaining({
      skipFileGeneration: {
        css: false,
        description: false,
        forceUpdate: true,
        react: false,
        storybook: false,
        styled: false
      }
    })
  );
});

/*
 * Output token format
 */
test('It should return "js" for outputTokenFormat if passing "js" (long-hand)', () => {
  expect(parseCliArgs(['--outputTokenFormat', 'js'])).toEqual(
    expect.objectContaining({
      outputTokenFormat: 'js'
    })
  );
});

test('It should return "js" for outputTokenFormat if passing "js" (short-hand)', () => {
  expect(parseCliArgs(['-tf', 'js'])).toEqual(
    expect.objectContaining({
      outputTokenFormat: 'js'
    })
  );
});

test('It should return default value for outputTokenFormat if passing invalid value (long-hand)', () => {
  expect(parseCliArgs(['--outputTokenFormat', 'asdf'])).toEqual(
    expect.objectContaining({
      outputTokenFormat: defaultConfig.outputTokenFormat
    })
  );
});

/*
 * Font unit
 */
test('It should return "em" for fontUnit if passing "em" (long-hand)', () => {
  expect(parseCliArgs(['--fontUnit', 'em'])).toEqual(
    expect.objectContaining({
      fontUnit: 'em'
    })
  );
});

test('It should return "em" for fontUnit if passing "em" (short-hand)', () => {
  expect(parseCliArgs(['-f', 'em'])).toEqual(
    expect.objectContaining({
      fontUnit: 'em'
    })
  );
});

test('It should return default value for fontUnit if passing invalid value (long-hand)', () => {
  expect(parseCliArgs(['--fontUnit', 'asdf'])).toEqual(
    expect.objectContaining({
      fontUnit: defaultConfig.fontUnit
    })
  );
});

/*
 * Spacing unit
 */
test('It should return "em" for outputTokenFormat if passing "em" (long-hand)', () => {
  expect(parseCliArgs(['--spacingUnit', 'em'])).toEqual(
    expect.objectContaining({
      spacingUnit: 'em'
    })
  );
});

test('It should return "em" for outputTokenFormat if passing "em" (short-hand)', () => {
  expect(parseCliArgs(['-s', 'em'])).toEqual(
    expect.objectContaining({
      spacingUnit: 'em'
    })
  );
});

test('It should return default value for spacingUnit if passing invalid value', () => {
  expect(parseCliArgs(['--spacingUnit', 'asdf'])).toEqual(
    expect.objectContaining({
      spacingUnit: defaultConfig.spacingUnit
    })
  );
});

/*
 * Token
 */
test('It should return "asdf" for token if passing "asdf" (long-hand)', () => {
  expect(parseCliArgs(['--token', 'asdf'])).toEqual(
    expect.objectContaining({
      token: 'asdf'
    })
  );
});

test('It should return "asdf" for token if passing "asdf" (short-hand)', () => {
  expect(parseCliArgs(['-t', 'asdf'])).toEqual(
    expect.objectContaining({
      token: 'asdf'
    })
  );
});

/*
 * Token data type
 */
test('It should return "enum" for token if passing "enum" (long-hand)', () => {
  expect(parseCliArgs(['--outputTokenDataType', 'enum'])).toEqual(
    expect.objectContaining({
      outputTokenDataType: 'enum'
    })
  );
});

test('It should return "enum" for token if passing "enum" (short-hand)', () => {
  expect(parseCliArgs(['-tokentype', 'enum'])).toEqual(
    expect.objectContaining({
      outputTokenDataType: 'enum'
    })
  );
});

/*
 * URL
 */
test('It should return "abc123" for url if passing "abc123" (long-hand)', () => {
  expect(parseCliArgs(['--url', 'abc123'])).toEqual(
    expect.objectContaining({
      url: 'abc123'
    })
  );
});

test('It should return "abc123" for url if passing "abc123" (short-hand)', () => {
  expect(parseCliArgs(['-u', 'abc123'])).toEqual(
    expect.objectContaining({
      url: 'abc123'
    })
  );
});

/*
 * Output folder base file
 */
test('It should return ".figma" for outputFolderBaseFile if passing "figma" (long-hand)', () => {
  expect(parseCliArgs(['--outputFolderBaseFile', 'figma'])).toEqual(
    expect.objectContaining({
      outputFolderBaseFile: 'figma'
    })
  );
});

test('It should return "figma" for outputFolderBaseFile if passing "figma" (short-hand)', () => {
  expect(parseCliArgs(['-base', 'figma'])).toEqual(
    expect.objectContaining({
      outputFolderBaseFile: 'figma'
    })
  );
});

/*
 * Output folder tokens
 */
test('It should return "tokens" for outputFolderTokens if passing "--outputFolderTokens" (long-hand)', () => {
  expect(parseCliArgs(['--outputFolderTokens', 'tokens'])).toEqual(
    expect.objectContaining({
      outputFolderTokens: 'tokens'
    })
  );
});

test('It should return "tokens" for outputFolderTokens if passing "-tokens" (short-hand)', () => {
  expect(parseCliArgs(['-tokens', 'tokens'])).toEqual(
    expect.objectContaining({
      outputFolderTokens: 'tokens'
    })
  );
});

/*
 * Output folder elements
 */
test('It should return "elements" for outputFolderElements if passing "--outputFolderElements" (long-hand)', () => {
  expect(parseCliArgs(['--outputFolderElements', 'elements'])).toEqual(
    expect.objectContaining({
      outputFolderElements: 'elements'
    })
  );
});

test('It should return "elements" for outputFolderElements if passing "-elements" (short-hand)', () => {
  expect(parseCliArgs(['-elements', 'elements'])).toEqual(
    expect.objectContaining({
      outputFolderElements: 'elements'
    })
  );
});

/*
 * Output file name
 */
test('It should return "tokens" for outputFileName if passing "--outputFileName figma.json" (long-hand)', () => {
  expect(parseCliArgs(['--outputFileName', 'figma.json'])).toEqual(
    expect.objectContaining({
      outputFileName: 'figma.json'
    })
  );
});

test('It should return "tokens" for outputFileName if passing "-file figma.json" (short-hand)', () => {
  expect(parseCliArgs(['-file', 'figma.json'])).toEqual(
    expect.objectContaining({
      outputFileName: 'figma.json'
    })
  );
});

/*
 * Postscript font family names
 */
test('It should return true for usePostscriptFontNames if passing true (long-hand)', () => {
  expect(parseCliArgs(['--usePostscriptFontNames', true])).toEqual(
    expect.objectContaining({
      usePostscriptFontNames: true
    })
  );
});

test('It should return true for usePostscriptFontNames if passing true (short-hand)', () => {
  expect(parseCliArgs(['-ps', true])).toEqual(
    expect.objectContaining({
      usePostscriptFontNames: true
    })
  );
});

/*
 * Template paths
 */

test('It should return template path for React, if provided', () => {
  expect(parseCliArgs(['--templatePathReact', 'templates/react.jsx'])).toEqual(
    expect.objectContaining({
      templates: {
        templatePathReact: 'templates/react.jsx',
        templatePathStyled: 'templates/styled.jsx',
        templatePathStorybook: 'templates/story.js'
      }
    })
  );
});

test('It should return template path for Styled Components, if provided', () => {
  expect(parseCliArgs(['--templatePathStyled', 'templates/styled.jsx'])).toEqual(
    expect.objectContaining({
      templates: {
        templatePathReact: 'templates/react.jsx',
        templatePathStyled: 'templates/styled.jsx',
        templatePathStorybook: 'templates/story.js'
      }
    })
  );
});

test('It should return template path for Storybook, if provided', () => {
  expect(parseCliArgs(['--templatePathStorybook', 'templates/story.js'])).toEqual(
    expect.objectContaining({
      templates: {
        templatePathReact: 'templates/react.jsx',
        templatePathStyled: 'templates/styled.jsx',
        templatePathStorybook: 'templates/story.js'
      }
    })
  );
});
