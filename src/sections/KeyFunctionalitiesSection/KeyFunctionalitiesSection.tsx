import React from 'react';

import { Link } from '../../components/Link';
import { List, ListItem } from '../../components/List';
import { SectionLayout } from '../../components/SectionLayout';
import { TextAndMediaItem } from '../../components/TextAndMediaItem';

const id = 'key-functionalities';

export const KeyFunctionalitiesSection = () => {
  return (
    <SectionLayout heading="Key Functionalities" id={id} alternativeBackground>
      <TextAndMediaItem
        index={0}
        heading="Intuitive Drag & Drop"
        mediaType="video"
        mediaData="https://youtu.be/8UN8S5WyI8Y"
        isStrong={false}
        reversedItems
      >
        <List>
          <ListItem>
            Build your forms in React by using
            <List>
              <ListItem>
                <strong>drag & drop interface</strong>
              </ListItem>
              <ListItem>nested fields</ListItem>
              <ListItem>vertical and horizontal lists</ListItem>
            </List>
          </ListItem>
          <ListItem>
            Choose Forminer that supports all common field types from
            <Link to="https://uniforms.tools/"> uniforms</Link>
          </ListItem>
          <ListItem>
            Use <strong>WYSIWYG</strong> code editor, if you prefer it over the
            no-code interface
          </ListItem>
          <ListItem>
            Set field properties
            <List>
              <ListItem>
                like required/predefined values (dropdown list)
              </ListItem>
              <ListItem>min/max length</ListItem>
              <ListItem>placeholder</ListItem>
              <ListItem>default value</ListItem>
              <ListItem>others</ListItem>
            </List>
          </ListItem>
        </List>
      </TextAndMediaItem>

      <TextAndMediaItem
        index={1}
        heading="Conditional fields"
        mediaType="video"
        mediaData="https://youtu.be/Q5_JNpGoxCo"
        isStrong={false}
        reversedItems
      >
        <List>
          <ListItem>
            Use<strong> conditional field validation</strong>, and spend your
            saved time on other areas of your project.
          </ListItem>
          <ListItem>
            Save your time by a conditional rendering of fields, a
            <strong> display-if </strong>solution
          </ListItem>
          <ListItem>
            You&apos;ll have the support of any logic for any field
          </ListItem>
          <ListItem>
            Define logic by<strong> no-code interface</strong>
          </ListItem>
        </List>
      </TextAndMediaItem>

      <TextAndMediaItem
        index={2}
        heading="Custom fields"
        mediaType="video"
        mediaData="https://youtu.be/wSkpwRrBN_s"
        isStrong={false}
        reversedItems
      >
        <List>
          <ListItem>Add simply any new field you&apos;d like</ListItem>
          <ListItem>Use fields already present in your application</ListItem>
          <ListItem>
            Use any fields from
            <Link to="https://uniforms.tools/"> uniforms</Link>
          </ListItem>
        </List>
      </TextAndMediaItem>

      <TextAndMediaItem
        index={3}
        heading="Schema-based headless approach"
        mediaType="video"
        mediaData="https://youtu.be/xswDB9qbJKU"
        isStrong={false}
        reversedItems
      >
        <List>
          <ListItem>
            Prepare React form once and
            <strong> use it with various themes</strong>
          </ListItem>
          <ListItem>
            Take advantage of a<strong> clear schema definition </strong>that
            operates on data and correct, copy and paste the form
            <strong> directly into your project</strong>
          </ListItem>
          <ListItem>
            You can<strong> create no-code and low-code solutions </strong>
            quickly and well, thanks to schema management with easily display
            form resources
          </ListItem>
          <ListItem>
            Use<Link to="https://uniforms.tools/"> uniforms </Link>with full
            state engine, able to handle logic between fields and custom error
            messages
          </ListItem>
        </List>
      </TextAndMediaItem>

      <TextAndMediaItem
        index={4}
        heading="Quality of the generated code"
        mediaType="video"
        mediaData="https://youtu.be/3Av4N_qlN2U"
        isStrong={false}
        reversedItems
      >
        <List>
          <ListItem>
            Build React forms through a code, as well as through a
            <strong> WYSIWYG </strong>interface, with a
            <strong> stable synchronization </strong>between two methods
          </ListItem>
          <ListItem>
            Ensure<strong> good Developer Experience </strong>by choosing a
            package based on
            <Link to="https://uniforms.tools/"> uniforms</Link>, trusted by
            GitHub community
          </ListItem>
          <ListItem>
            Use<strong> clean-looking components </strong>while keeping
            extensibility and separation of concerns
          </ListItem>
        </List>
      </TextAndMediaItem>
    </SectionLayout>
  );
};
