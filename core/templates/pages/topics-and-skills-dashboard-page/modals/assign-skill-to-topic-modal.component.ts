// Copyright 2021 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Component for Assign Skill To Topic Modal.
 */

import {Component} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmOrCancelModal} from 'components/common-layout-directives/common-elements/confirm-or-cancel-modal.component';
import {CreatorTopicSummary} from 'domain/topic/creator-topic-summary.model';

@Component({
  selector: 'oppia-assign-skill-to-topic-modal',
  templateUrl: './assign-skill-to-topic-modal.component.html',
})
export class AssignSkillToTopicModalComponent extends ConfirmOrCancelModal {
  // This property is initialized using component interactions
  // and we need to do non-null assertion. For more information, see
  // https://github.com/oppia/oppia/wiki/Guide-on-defining-types#ts-7-1
  topicSummaries!: CreatorTopicSummary[];
  selectedTopicIds: string[] = [];

  constructor(private ngbActiveModal: NgbActiveModal) {
    super(ngbActiveModal);
  }
}
