<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace Pvt\VideoBundle\Controller;

/**
 * Description of VideoController
 *
 * @author root
 */
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Pvt\VideoBundle\Entity\Video;

class HistoryVideoController extends Controller {
    
    /**
     * @Route(
     *     "/video_player",
     *     name = "pvt_video_homepage"
     * )
     * @Method({"GET"})
     * @return JsonResponse
     */
    
    public function indexAction() {
        //return new Response('Index: "Ca marche!"');
        
        $service= $this->container->get('pvt_video.historyvideo');
        
        $videolist = $service->getAll();
        
        /*$response = new Response();
        $response->setContent(json_encode($videolist));
        $response->headers->set('Content-Type','application/json');
        return $response;*/
        
        if (empty($videolist)){
            $jsonContent=array(
              'code'=>1,
              'message'=> 'post not found',
              'error'=>null,
              'videos'=>null
            );
        return new JsonResponse($jsonContent, Response::HTTP_NOT_FOUND);  
        }
        
        $data = $this->get('jms_serializer')->serialize($videolist, 'json');
        
        $jsonContent=array(
              'code'=>1,
              'message'=> 'success',
              'error'=>null,
              'videos'=>json_decode($data)
            );
        return new JsonResponse ($jsonContent, Response::HTTP_OK);
    }
    
    /**
     * @Route(
     *     "/show/{id}",
     *     name = "show_video"
     * )
     * @Method({"GET"})
     * @return JsonResponse
     */
    
    public function showAction($id) {
        //return new Response('Show: "Ca marche ! avec id = '.$id.'"');
        
        $service= $this->container->get('pvt_video.historyvideo');
        
        $video = $service->get($id);
        
        if (empty($video)) {
            //throw new NotFoundHttpException ("La video d'id ".$id." n'existe pas!!! " );
            $jsonContent=array(
              'code'=>1,
              'message'=> 'post not found',
              'error'=>null,
              'result'=>null
            );
        
        return new JsonResponse($jsonContent, Response::HTTP_NOT_FOUND);
        }
        
        $data = $this->get('jms_serializer')->serialize($video, 'json');
        
        $jsonContent=array(
              'code'=>1,
              'message'=> 'success',
              'error'=>null,
              'result'=>json_decode($data)
            );
        return new JsonResponse ($jsonContent, Response::HTTP_OK);
    }
    
    /**
     * @param Request $request
     * @return JsonResponse
     * @Route("/create",name="add_video")
     * @Method({"POST"})
     * 
     */
    
    public function createAction(Request $request) {
        //return new Response('Create: "Ca marche !"');
            $service= $this->container->get('pvt_video.historyvideo');

            $data=$request->getContent();
            $post=$this->get('jms_serializer')->deserialize($data,Video::class,'json');
            $service->create($post);
            
            //$videolist = $service->getAll();
        
            $response=array(
              'code'=>1,
              'message'=> 'video creer',
              'error'=>null,
              'videos'=>null
            );
        return new JsonResponse ($response, Response::HTTP_CREATED);
       
    }
    
    /**
     * @param Request $request
     * @param $id
     * @return JsonResponse
     * @Route("/update/{id}",name="add_video")
     * @Method({"PUT"})
     * 
     */
    
    public function updateAction(Request $request,$id) {
        //return new Response('Create: "Ca marche !"');
        
    $service= $this->container->get('pvt_video.historyvideo');
        /* if (empty($video))
        {
            $response=array(
                'code'=>1,
                'message'=>'Post Not found !',
                'errors'=>null,
                'videos'=>null
            );
            return new JsonResponse($response, Response::HTTP_NOT_FOUND);
        }*/
    
        $body=$request->getContent();
        $data=$this->get('jms_serializer')->deserialize($body,Video::class,'json');
        
        $service->update(
                            $id,
                            $data->geturl(),
                            $data->getheure()
                        );
        
        $response=array(
            'code'=>0,
            'message'=>'Post updated!',
            'errors'=>null,
            'videos'=>null
        );
        return new JsonResponse($response,200);
        
    }
    
    /**
     * @param $id
     * @return JsonResponse
     * @Route("/delete/{id}",name="delete_video")
     * @Method({"DELETE"})
     * 
     */
    
    public function deleteAction($id ){
        $service= $this->container->get('pvt_video.historyvideo');
        
        $service->delete($id);
        
        $response=array(
            'code'=>0,
            'message'=>'video deleted !',
            'errors'=>null,
            'result'=>null
        );
        return new JsonResponse($response,200);
    }
    
    /**
     * @Route(
     *     "/show_hour",
     *     name = "show_video_hour"
     * )
     * @Method({"GET"})
     * @return JsonResponse
     */
    
    public function getbyHeureAction() {
        //return new Response('Create: "Ca marche !"');
        
        $service= $this->container->get('pvt_video.historyvideo');
        
        $videolist=$service->getByHeure();
        
       if (empty($videolist)){
            $jsonContent=array(
              'code'=>1,
              'message'=> 'post not found',
              'error'=>null,
              'videos'=>null
            );
        return new JsonResponse($jsonContent, Response::HTTP_NOT_FOUND);  
        }
        
        $data = $this->get('jms_serializer')->serialize($videolist, 'json');
        
        $jsonContent=array(
              'code'=>1,
              'message'=> 'success',
              'error'=>null,
              'videos'=>json_decode($data)
            );
        return new JsonResponse ($jsonContent, Response::HTTP_OK);
    }
    
}