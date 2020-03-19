<%@ include file="/init.jsp" %>

<%--suppress JSUnresolvedVariable, JSUnresolvedFunction --%>
<script type="text/javascript">
Liferay.Loader.require("vodafone-uk-liferay@0.0.1/app-demo-2");
</script>

<div id="${ns}counter-root"></div>
<script data-union-widget="counter" data-union-container="${ns}counter-root"></script>
