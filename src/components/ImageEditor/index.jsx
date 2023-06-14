import FilerobotImageEditor, {
  TABS,
  TOOLS,
} from "react-filerobot-image-editor";
import { translate } from "../../utils/constants";

import "./styles.scss";

export const ImageEditor = ({
  img,
  onSelect,
  closeImgEditor,
  isImgEditorShown,
}) => {
  const handleSave = (editedImageObject) => {
    onSelect(editedImageObject);
    closeImgEditor();
  };
  return (
    <div className="editorContainer">
      <div className="editorWrapper" id="editor_container">
        {isImgEditorShown && (
          <FilerobotImageEditor
            source={img}
            onSave={handleSave}
            onClose={closeImgEditor}
            language="ru"
            annotationsCommon={{
              fill: "#ff0000",
            }}
            Text={{ text: "Filerobot..." }}
            Rotate={{ angle: 90, componentType: "slider" }}
            Crop={{
              presetsItems: [
                {
                  titleKey: "classicTv",
                  descriptionKey: "4:3",
                  ratio: 4 / 3,
                
                },
                {
                  titleKey: "cinemascope",
                  descriptionKey: "21:9",
                  ratio: 21 / 9,
              
                },
              ],
              presetsFolders: [
                {
                  titleKey: "socialMedia", 
              
                  groups: [
                    {
                      titleKey: "facebook",
                      items: [
                        {
                          titleKey: "profile",
                          width: 180,
                          height: 180,
                          descriptionKey: "fbProfileSize",
                        },
                        {
                          titleKey: "coverPhoto",
                          width: 820,
                          height: 312,
                          descriptionKey: "fbCoverPhotoSize",
                        },
                      ],
                    },
                  ],
                },
              ],
            }}
            tabsIds={[TABS.FILTERS, TABS.FINETUNE, TABS.RESIZE, TABS]} 
            defaultTabId={TABS.FILTERS} 
            defaultToolId={TOOLS.TEXT} 
            translations={translate}
            useBackendTranslations={false}
          />
        )}
      </div>
    </div>
  );
};
