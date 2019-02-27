// Type definitions for Material Components Web 0.35
// Project: https://material.io/components/, https://github.com/material-components/material-components-web
// Definitions by: Brent Douglas <https://github.com/BrentDouglas>, Collin Kostichuk <https://github.com/ckosti>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import MDCComponent from 'material__base/component';
import MDCLineRippleFoundation from './foundation';
import MDCLineRippleAdapter from './adapter';

export { MDCLineRippleFoundation, MDCLineRippleAdapter };

export class MDCLineRipple extends MDCComponent<MDCLineRippleAdapter, MDCLineRippleFoundation> {
    static attachTo(root: Element): MDCLineRipple;

    /**
     * Activates the line ripple
     */
    activate(): void;

    /**
     * Deactivates the line ripple
     */
    deactivate(): void;

    /**
     * Sets the transform origin given a user's click location. The `rippleCenter` is the
     * x-coordinate of the middle of the ripple.
     */
    setRippleCenter(xCoordinate: number): void;
}
