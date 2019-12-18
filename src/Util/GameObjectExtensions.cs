using UnityEngine;
using System.Collections;
using System.Collections.Generic;

using BattleTech;
using BattleTech.Designed;
using BattleTech.Framework;

public static class GameObjextExtensions {
  public static List<GameObject> FindAllContains(this GameObject go, string name) {
    List<GameObject> gameObjects = new List<GameObject>();

    foreach (Transform t in go.transform) {
      if (t.name.Contains(name)) {
        gameObjects.Add(t.gameObject);
      }
    }

    return gameObjects;
  }

  public static EncounterObjectGameLogic GetEncounterObjectGameLogic(this GameObject go, string guid) {
    EncounterObjectGameLogic[] encounterGameLogics = go.GetComponentsInChildren<EncounterObjectGameLogic>();
    foreach (EncounterObjectGameLogic logic in encounterGameLogics) {
      if (logic.encounterObjectGuid == guid) return logic;
    }

    MissionControl.Main.LogDebug("[GetEncounterObjectGameLogic] Encounter logic was not found (is null)");
    return null;
  }

  public static GameObject FindRecursive(this GameObject gameObject, string checkName) {
    foreach (Transform t in gameObject.transform) {
      if (t.name == checkName) return t.gameObject;

      GameObject possibleGameObject = FindRecursive(t.gameObject, checkName);
      if (possibleGameObject != null) return possibleGameObject;
    }

    return null;
  }

  public static GameObject CreateDebugPoint(string name, Vector3 position, Color colour) {
    GameObject debugPoint = GameObject.CreatePrimitive(PrimitiveType.Cube);
    debugPoint.name = name;
    debugPoint.transform.position = position;
    debugPoint.transform.localScale = new Vector3(5, 5, 5);
    Material mat = new Material(Shader.Find("UI/DefaultBackground"));
    mat.color = colour;
    debugPoint.GetComponent<Renderer>().sharedMaterial = mat;
    return debugPoint;
  }
}